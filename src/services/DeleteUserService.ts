import { getUserDataService, RedisServices } from "./index";
import { CONSTANTS } from "../configurations";
import { IUserDataTypes } from "../types";

const deleteUserService = async (imei: string): Promise<boolean> => {
  try {
    const position = await RedisServices.getPosition(
      CONSTANTS.ERH_IMEI_TABLE,
      imei
    );
    if (position !== null) {
      const userData: IUserDataTypes = await getUserDataService(String(imei));
      const usersUsageData = JSON.parse(
        await RedisServices.getDataFromPosition(
          CONSTANTS.ERH_USAGE_TABLE,
          position
        )
      );

      await RedisServices.deleteData(CONSTANTS.ERH_IMEI_TABLE, imei);
      await RedisServices.deleteData(
        CONSTANTS.ERH_USERS_TABLE,
        JSON.stringify(userData)
      );
      await RedisServices.deleteData(
        CONSTANTS.ERH_USAGE_TABLE,
        JSON.stringify(usersUsageData)
      );
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return true;
};

export { deleteUserService };
