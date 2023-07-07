import { CONSTANTS, CurrencyEnum, CurrencyImgEnum } from "../configurations";
import { RedisServices } from "./index";
import { IForwardCurrencyDataTypes } from "../types";

const getFCService = async () => {
  const data: Array<IForwardCurrencyDataTypes> = [];
  try {
    const tableFC = await RedisServices.getData(
      CONSTANTS.ERH_FORWARD_CURRENCY_TABLE
    );
    if (tableFC) {
      tableFC?.forEach((v: string) => {
        const tableFCItem: IForwardCurrencyDataTypes = JSON.parse(v);
        switch (tableFCItem?.forwardCurrency) {
          case CurrencyEnum.KZT: {
            data.push({
              ...tableFCItem,
              imgUrl: CurrencyImgEnum.KZT,
            });
            break;
          }
          case CurrencyEnum.EUR: {
            data.push({
              ...tableFCItem,
              imgUrl: CurrencyImgEnum.EUR,
            });
            break;
          }
          case CurrencyEnum.USD: {
            data.push({
              ...tableFCItem,
              imgUrl: CurrencyImgEnum.USD,
            });
            break;
          }
          case CurrencyEnum.RUB: {
            data.push({
              ...tableFCItem,
              imgUrl: CurrencyImgEnum.RUB,
            });
            break;
          }
          default: {
            data.push(tableFCItem);
            break;
          }
        }
      });
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return data;
};

export { getFCService };
