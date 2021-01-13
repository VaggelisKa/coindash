import { Coin } from 'models/models';
import React, { createContext, useCallback, useEffect, useState } from 'react';

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = (settings: string) => void;
type SetCoins = (coins: {[id: string]: Coin}) => void;
type SetIsLoading = (isLoading: boolean) => void;

interface AppContextValues {
  savedSettings: { settings: string, firstVisit: boolean }
  coinList: {[id: string]: Coin}
  loading: boolean,
  favorites: string[],

  confirmSettings: ConfirmSettings
  setCoins: SetCoins
  setIsLoading: SetIsLoading
}

const initialState: AppContextValues = {
  savedSettings: { settings: '', firstVisit: true },
  coinList: {},
  loading: false,
  favorites: [],

  confirmSettings: () => {},
  setCoins: () => {},
  setIsLoading: () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useState({settings: '', firstVisit: true});
  const [coinList, setCoinList] = useState<{[id: string]: Coin}>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);

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

  const setCoins = useCallback((coins: {[id: string]: Coin}) => setCoinList(coins), [coinList]);
  const setIsLoading = (isLoading: boolean) => setLoading(isLoading);

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
        loading,
        favorites,
        confirmSettings,
        setCoins,
        setIsLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
