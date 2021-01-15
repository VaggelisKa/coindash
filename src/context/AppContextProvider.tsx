import { Coin } from 'models/models';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = () => void;
type SetCoins = (coins: {[id: string]: Coin}) => void;
type SetIsLoading = (isLoading: boolean) => void;
type SetFavoriteCoins = (coin: Coin) => void;
type RemoveFavoriteCoin = (coin: Coin) => void;
type CoinsFromSearch = (coins: {[id: string]: Coin}) => void;

interface AppContextValues {
  savedSettings: { settings: Coin[], firstVisit: boolean }
  coinList: {[id: string]: Coin}
  loading: boolean,
  favorites: Coin[],
  isInFavorites: boolean,
  filteredCoins: {[id: string]: Coin}

  confirmSettings: ConfirmSettings
  setCoins: SetCoins
  setIsLoading: SetIsLoading
  setFavoriteCoins: SetFavoriteCoins
  removeFavoriteCoin: RemoveFavoriteCoin
  coinsFromSearch: CoinsFromSearch
}

const initialState: AppContextValues = {
  savedSettings: { settings: [], firstVisit: true },
  coinList: {},
  loading: false,
  favorites: [],
  isInFavorites: false,
  filteredCoins: {},

  confirmSettings: () => {},
  setCoins: () => {},
  setIsLoading: () => {},
  setFavoriteCoins: () => {},
  removeFavoriteCoin: () => {},
  coinsFromSearch: () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useState<{settings: Coin[], firstVisit: boolean}>({settings: [], firstVisit: true});
  const [coinList, setCoinList] = useState<{[id: string]: Coin}>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Coin[]>([]);
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const [filteredCoins, setFilteredCoins] = useState<{[id: string]: Coin}>({});

  useEffect(() => {
    const coindashData = JSON.parse(localStorage.getItem('coindash') as string);

    if (!coindashData) {
      setSavedSettings({
        settings: [],
        firstVisit: true
      });
    } else {
      setSavedSettings({
        settings: [coindashData],
        firstVisit: false
      });
    }

    setFavorites(coindashData || []);
  }, []);


  const setCoins = useCallback((coins: {[id: string]: Coin}) => setCoinList(coins), [coinList]);
  const setIsLoading: SetIsLoading = (isLoading: boolean) => setLoading(isLoading);

  const setFavoriteCoins: SetFavoriteCoins = (coin: Coin) => {
    if (_.some(favorites, coin)) {
      // Maybe display alert?
      return;
    }

    setFavorites(_.concat(favorites, coin));
  };

  const removeFavoriteCoin: RemoveFavoriteCoin = useCallback((coin: Coin) => {
    const updatedFavorites: Coin[] = _.pull([...favorites], coin);
    setFavorites(updatedFavorites);
    setIsInFavorites(false);
  }, [favorites]);

  const coinsFromSearch: CoinsFromSearch = (coins: {[id: string]: Coin}) => setFilteredCoins(coins);

  const confirmSettings: ConfirmSettings = () => {
    if (favorites.length <= 0) return;

    localStorage.setItem('coindash', JSON.stringify([...favorites]));
  };

  return (
    <AppContext.Provider
      value={{
        savedSettings,
        coinList,
        loading,
        favorites,
        isInFavorites,
        filteredCoins,
        confirmSettings,
        setCoins,
        setIsLoading,
        setFavoriteCoins,
        removeFavoriteCoin,
        coinsFromSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
