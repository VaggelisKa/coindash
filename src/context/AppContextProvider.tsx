import { Coin } from 'models/models';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = (settings: Coin[]) => void;
type SetCoins = (coins: {[id: string]: Coin}) => void;
type SetIsLoading = (isLoading: boolean) => void;
type SetFavoriteCoins = (coins: Coin[]) => void;
type RemoveFavoriteCoin = (coin: Coin) => void;

interface AppContextValues {
  savedSettings: { settings: Coin[], firstVisit: boolean }
  coinList: {[id: string]: Coin}
  loading: boolean,
  favorites: Coin[],

  confirmSettings: ConfirmSettings
  setCoins: SetCoins
  setIsLoading: SetIsLoading
  setFavoriteCoins: SetFavoriteCoins
  removeFavoriteCoin: RemoveFavoriteCoin
}

const initialState: AppContextValues = {
  savedSettings: { settings: [], firstVisit: true },
  coinList: {},
  loading: false,
  favorites: [],

  confirmSettings: () => {},
  setCoins: () => {},
  setIsLoading: () => {},
  setFavoriteCoins: () => {},
  removeFavoriteCoin: () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useState<{settings: Coin[], firstVisit: boolean}>({settings: [], firstVisit: true});
  const [coinList, setCoinList] = useState<{[id: string]: Coin}>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Coin[]>([]);

  useEffect(() => {
    const coindashData = JSON.parse(localStorage.getItem('coindash') as string);

    if (!coindashData) {
      setSavedSettings({
        settings: [],
        firstVisit: true
      });
    } else {
      setSavedSettings({
        settings: coindashData.settings,
        firstVisit: false
      });
      setFavorites(savedSettings.settings);
    }
  }, []);

  const setCoins = useCallback((coins: {[id: string]: Coin}) => setCoinList(coins), [coinList]);
  const setIsLoading: SetIsLoading = (isLoading: boolean) => setLoading(isLoading);
  const setFavoriteCoins: SetFavoriteCoins = useCallback((coins: Coin[]) => setFavorites(favorites.concat(coins)), [favorites]);

  const removeFavoriteCoin: RemoveFavoriteCoin = useCallback((coin: Coin) => {
    const updatedFavorites: Coin[] = _.pull([...favorites], coin);
    setFavorites(updatedFavorites);
  }, [favorites]);

  const confirmSettings: ConfirmSettings = (settings: Coin[]) => {
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
        setIsLoading,
        setFavoriteCoins,
        removeFavoriteCoin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
