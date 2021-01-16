export interface Coin {
  Name: string;
  CoinName: string;
  ContentCreatedOn: number;
  FullName: string;
  Id: string;
  ImageUrl: string;
  isTrading: boolean;
  TotalCoinsMined: number;
  Symbol: string;
}

export interface Prices {
  EUR: PriceData
}

export interface PriceData {
  CHANGE24HOUR: number;
  CHANGEDAY: number;
  CHANGEHOUR: number;
  CHANGEPCT24HOUR: number;
  CHANGEPCTDAY: number;
  CHANGEPCTHOUR: number;
  CONVERSIONSYMBOL: string;
  CONVERSIONTYPE: string;
  FLAGS: string;
  FROMSYMBOL: string;
  HIGH24HOUR: number;
  HIGHDAY: number;
  HIGHHOUR: number;
  IMAGEURL: string;
  LASTMARKET: string;
  LASTTRADEID: string;
  LASTUPDATE: number;
  LASTVOLUME: number;
  LASTVOLUMETO: number;
  LOW24HOUR: number;
  LOWDAY: number;
  LOWHOUR: number;
  MARKET: string;
  MEDIAN: number;
  OPEN24HOUR: number;
  OPENDAY: number;
  OPENHOUR: number;
  PRICE: number;
}

