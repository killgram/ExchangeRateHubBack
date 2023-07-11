import { RedisServices } from "./index";
import { IMinMaxTypes, IResultCurrencyType } from "../types";

const getCoursesService = async (ccTable: string, forwardCurrency: string) => {
  const courses: Array<IResultCurrencyType> = [];
  const minmax: IMinMaxTypes = {
    maxSell: 0,
    maxBuy: 0,
    minBuy: 0,
    minSell: 0,
  };

  try {
    const table = await RedisServices.getData(ccTable);
    if (table) {
      table?.forEach((v: string, index: number) => {
        const tableItem: IResultCurrencyType = JSON.parse(v);
        if (tableItem?.[forwardCurrency]) {
          const newData: any = {};
          newData[forwardCurrency] = tableItem?.[forwardCurrency];
          if (index === 0) {
            minmax.maxBuy = newData[forwardCurrency]?.buy;
            minmax.minBuy = newData[forwardCurrency]?.buy;
            minmax.maxSell = newData[forwardCurrency]?.sell;
            minmax.minSell = newData[forwardCurrency]?.sell;
          } else {
            const buyVal = newData[forwardCurrency]?.buy;
            const sellVal = newData[forwardCurrency]?.sell;
            if (buyVal > minmax.maxBuy) {
              minmax.maxBuy = buyVal;
            }
            if (buyVal < minmax.minBuy) {
              minmax.minBuy = buyVal;
            }
            if (sellVal > minmax.maxSell) {
              minmax.maxSell = sellVal;
            }
            if (sellVal < minmax.minSell) {
              minmax.minSell = sellVal;
            }
          }
        }
      });

      table?.forEach((v: string) => {
        const tableItem: IResultCurrencyType = JSON.parse(v);
        if (tableItem?.[forwardCurrency]) {
          const newData: any = {};
          newData[forwardCurrency] = tableItem?.[forwardCurrency];
          const isMaxBuy = minmax.maxBuy === newData[forwardCurrency]?.buy;
          const isMaxSell = minmax.maxSell === newData[forwardCurrency]?.sell;
          const isMinBuy = minmax.minBuy === newData[forwardCurrency]?.buy;
          const isMinSell = minmax.minSell === newData[forwardCurrency]?.sell;
          if (isMaxBuy) {
            newData.isMaxBuy = isMaxBuy;
          }
          if (isMaxSell) {
            newData.isMaxSell = isMaxSell;
          }
          if (isMinBuy) {
            newData.isMinBuy = isMinBuy;
          }
          if (isMinSell) {
            newData.isMinSell = isMinSell;
          }
          courses.push({
            bank: tableItem?.bank,
            bankUid: tableItem?.bankUid,
            dateTimestamp: tableItem?.dateTimestamp,
            imgUrl: `/orchid/${tableItem?.bankUid}.jpg`,
            ...newData,
          });
        }
      });
    }

    return courses;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export { getCoursesService };
