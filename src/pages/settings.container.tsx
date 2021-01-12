import React, { useContext, useEffect } from 'react';

import { AppContext } from 'context/AppContextProvider';
import Settings from './settings.component';
import Spinner from 'components/spinner.component';

const cc = require('cryptocompare');
cc.setApiKey('bc602bf27052c72e2ff02eef5c9b18881f12f22fa02fcf710fd5793626c27a86');

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

    return () => {

    };
  }, []);


  return (
    loading ? <Spinner /> : <Settings />
  );
};

export default React.memo(SettingsContainer);
