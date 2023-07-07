import { CONSTANTS } from "../configurations";
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
        data.push(tableItem);
      });
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return data;
};

export { getCCService };
