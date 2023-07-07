export interface IComparedCurrencyDataTypes {
  comparedCurrency: string;
  tableName: string;
  langList: Array<{
    lang: string;
    value: string;
  }>;
  uid: string;
  imgUrl?: string;
}
