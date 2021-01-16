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

  console.log(pricesData);
  return pricesData;
};


