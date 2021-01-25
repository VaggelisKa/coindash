import dayjs from 'dayjs';
import { Coin } from 'models/models';

const cc = require('cryptocompare');
cc.setApiKey('bc602bf27052c72e2ff02eef5c9b18881f12f22fa02fcf710fd5793626c27a86');

export const pricesAsync = async (favorites: Coin[]) => {
  const pricesData = [];
  for (let i = 0; i < favorites.length; i++) {
    try {
      const priceData = await cc.priceFull(favorites[i].Name, 'EUR');
      pricesData.push(priceData[favorites[i].Name]);
    } catch (error) {
      console.warn('Fetch price error ', error);
    }
  }

  return pricesData;
};

export const historicalDataAsync = async (selectedFavorite: Coin | null) => {
  try {
    const priceHistory: [{[id: string]: {EUR: number}}] = [{}];
    for (let i = 7; i > 0; i--) {
      if (i == 1) {
        priceHistory.push(
            cc.priceHistorical(
                selectedFavorite?.Symbol,
                ['EUR'],
                dayjs().toDate()
            )
        );
        break;
      }
      priceHistory.push(
          cc.priceHistorical(
              selectedFavorite?.Symbol,
              ['EUR'],
              dayjs().subtract(i, 'days').toDate()
          )
      );
    }
    return Promise.all(priceHistory.slice(1, 8));
  } catch (error) {
    console.log(error);
  }
};


