import { CONSTANTS, CurrencyEnum, CurrencyImgEnum } from "../configurations";
import { RedisServices } from "./index";
import { IComparedCurrencyDataTypes } from "../types";

const getCCService = async () => {
  const data: Array<IComparedCurrencyDataTypes> = [];
  try {
    const table = await RedisServices.getData(
      CONSTANTS.ERH_COMPARED_CURRENCY_TABLE
    );
    if (table) {
      table?.forEach((v: string) => {
        const tableItem: IComparedCurrencyDataTypes = JSON.parse(v);
        switch (tableItem?.comparedCurrency) {
          case CurrencyEnum.KZT: {
            data.push({
              ...tableItem,
              imgUrl: CurrencyImgEnum.KZT,
            });
            break;
          }
          case CurrencyEnum.EUR: {
            data.push({
              ...tableItem,
              imgUrl: CurrencyImgEnum.EUR,
            });
            break;
          }
          case CurrencyEnum.USD: {
            data.push({
              ...tableItem,
              imgUrl: CurrencyImgEnum.USD,
            });
            break;
          }
          case CurrencyEnum.RUB: {
            data.push({
              ...tableItem,
              imgUrl: CurrencyImgEnum.RUB,
            });
            break;
          }
          default: {
            data.push(tableItem);
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

export { getCCService };
