import { Coin } from 'models/models';
import React, { createContext, useEffect, useState } from 'react';

const cc = require('cryptocompare');
cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = (settings: string) => void;

interface AppContextValues {
  savedSettings: { settings: string, firstVisit: boolean }
  coinList: Coin[],
  confirmSettings: ConfirmSettings
}

const initialState: AppContextValues = {
  savedSettings: { settings: '', firstVisit: true },
  coinList: [],
  confirmSettings: () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useState({settings: '', firstVisit: true});
  const [coinList, setCoinList] = useState<Coin[]>([]);

  const getCoinData = async () => {
    try {
      const coinData = await cc.coinList();
      if (coinData) {
        const { Data } = coinData;
        setCoinList(Data);
      }
    } catch (error) {
      // Set an error state maybe?
    }
  };

  useEffect(() => {
    getCoinData();
  }, []);

  console.log(coinList);

  useEffect(() => {
    const coindashData = JSON.parse(localStorage.getItem('coindash') as string);

    if (!coindashData) {
      setSavedSettings({
        settings: '',
        firstVisit: true
      });
    } else {
      setSavedSettings({
        settings: coindashData.settings,
        firstVisit: false
      });
    }
  }, []);


  const confirmSettings: ConfirmSettings = (settings: string) => {
    if (!settings) return;

    localStorage.setItem('coindash', JSON.stringify({settings}));
    setSavedSettings({settings, firstVisit: false});
  };

  return (
    <AppContext.Provider
      value={{
        savedSettings,
        coinList,
        confirmSettings
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
