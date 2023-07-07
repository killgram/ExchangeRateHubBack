export interface IForwardCurrencyDataTypes {
  forwardCurrency: string;
  langList: Array<{
    lang: string;
    value: string;
  }>;
  uid: string;
  imgUrl?: string;
}
