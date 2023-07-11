export interface IResultCurrencyType {
  comparedCurrency?: string;
  bank?: string;
  bankUid?: string;
  date?: string;
  dateTimestamp?: number;
  [currency: string]: any;
  imgUrl?: string;
  isMaxBuy?: boolean;
  isMaxSell?: boolean;
  isMinBuy?: boolean;
  isMinSell?: boolean;
}
