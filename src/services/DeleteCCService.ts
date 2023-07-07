import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

const deleteCCService = async (uid: string) => {
  try {
    const ccTable = await RedisServices.getData(
      CONSTANTS.ERH_COMPARED_CURRENCY_TABLE
    );
    let foundItem;
    ccTable?.forEach((item: string) => {
      const ccItem = JSON.parse(item);
      if (ccItem?.uid === uid) {
        foundItem = ccItem;
      }
    });
    if (foundItem) {
      await RedisServices.deleteData(
        CONSTANTS.ERH_COMPARED_CURRENCY_TABLE,
        JSON.stringify(foundItem)
      );
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return true;
};

export { deleteCCService };
