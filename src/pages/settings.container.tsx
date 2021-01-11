import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';

import { AppContext } from 'context/AppContextProvider';
import Settings from './settings.component';

const cc = require('cryptocompare');
cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

const SettingsContainer: React.FC = () => {
  const { setCoins, setIsLoading, loading } = useContext(AppContext);

  const getCoinData = async () => {
    try {
      setIsLoading(true);

      const coinData = await cc.coinList();
      if (coinData) {
        const { Data } = coinData;
        setCoins(Data);
        setIsLoading(false);
      }
    } catch (error) {
      // Set an error state maybe?
    }
  };

  useEffect(() => {
    getCoinData();
  }, []);


  return (
    loading ? <Text>Loading coins</Text> : <Settings />
  );
};

export default React.memo(SettingsContainer);
