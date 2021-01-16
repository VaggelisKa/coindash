import { Coin, Prices } from 'models/models';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import _ from 'lodash';
import { pricesAsync } from 'helpers/async-requests';

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

type ConfirmSettings = () => void;
type SetCoins = (coins: {[id: string]: Coin}) => void;
type SetIsLoading = (isLoading: boolean) => void;
type SetFavoriteCoins = (coin: Coin) => void;
type RemoveFavoriteCoin = (coin: Coin) => void;
type CoinsFromSearch = (coins: {[id: string]: Coin}) => void;
type GetPrices = (favorites: Coin[]) => void

interface AppContextValues {
  savedSettings: { settings: Coin[], firstVisit: boolean }
  coinList: {[id: string]: Coin}
  loading: boolean,
  favorites: Coin[],
  isInFavorites: boolean,
  filteredCoins: {[id: string]: Coin},
  prices: Prices[]

  confirmSettings: ConfirmSettings
  setCoins: SetCoins
  setIsLoading: SetIsLoading
  setFavoriteCoins: SetFavoriteCoins
  removeFavoriteCoin: RemoveFavoriteCoin
  coinsFromSearch: CoinsFromSearch
  getPrices: GetPrices
}

const initialState: AppContextValues = {
  savedSettings: { settings: [], firstVisit: true },
  coinList: {},
  loading: false,
  favorites: [],
  isInFavorites: false,
  filteredCoins: {},
  prices: [],

  confirmSettings: () => {},
  setCoins: () => {},
  setIsLoading: () => {},
  setFavoriteCoins: () => {},
  removeFavoriteCoin: () => {},
  coinsFromSearch: () => {},
  getPrices: async () => {}
};

export const AppContext = createContext<AppContextValues>(initialState);

const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [savedSettings, setSavedSettings] = useStateWithCallbackLazy<{settings: Coin[], firstVisit: boolean}>({settings: [], firstVisit: true});
  const [coinList, setCoinList] = useState<{[id: string]: Coin}>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Coin[]>([]);
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const [filteredCoins, setFilteredCoins] = useState<{[id: string]: Coin}>({});
  const [prices, setPrices] = useState<Prices[]>([]);

  useEffect(() => {
    const coindashData = JSON.parse(localStorage.getItem('coindash') as string);

    if (Object.keys(coindashData || {}).length <= 0) {
      setSavedSettings({
        settings: [],
        firstVisit: true
      }, null);
    } else {
      setSavedSettings({
        settings: [coindashData],
        firstVisit: false
      }, () => {
        setFavorites(Object.values(coindashData || {}));
      });
    }
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

  const getPrices: GetPrices = async (favorites: Coin[]) => {
    if (savedSettings.firstVisit) return;

    setLoading(true);

    let pricesArr = await pricesAsync(favorites);
    pricesArr = pricesArr.filter(price => Object.keys(price).length);
    setPrices(pricesArr);
    console.log(pricesArr);

    setLoading(false);
  };


  const confirmSettings: ConfirmSettings = () => {
    localStorage.setItem('coindash', JSON.stringify([...favorites]));
    setSavedSettings({
      settings: favorites,
      firstVisit: false
    }, () => {
      getPrices(favorites);
    });
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
        prices,
        confirmSettings,
        setCoins,
        setIsLoading,
        setFavoriteCoins,
        removeFavoriteCoin,
        coinsFromSearch,
        getPrices
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
