import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

const setNewUserService = async (data: string, imei: string) => {
  try {
    // save imei
    await RedisServices.addData(CONSTANTS.ERH_IMEI_TABLE, imei);
    // save additional data
    await RedisServices.addData(CONSTANTS.ERH_USERS_TABLE, data);
    // save field from usage
    await RedisServices.addData(
      CONSTANTS.ERH_USAGE_TABLE,
      JSON.stringify({
        imei: imei,
        usageCount: 0,
        lastUsage: Date.now(),
      })
    );
  } catch (e) {
    console.log((e as Error).message);
  }
  return true;
};

export { setNewUserService };
