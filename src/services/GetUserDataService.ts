import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";
import { IUserDataTypes } from "../types";

const getUserDataService = async (imei: string): Promise<IUserDataTypes> => {
  let result: IUserDataTypes = {
    imei: "",
    uid: "",
    tgUid: null,
  };
  try {
    const position = await RedisServices.getPosition(
      CONSTANTS.ERH_IMEI_TABLE,
      imei
    );
    if (position !== null) {
      const usersData = JSON.parse(
        await RedisServices.getDataFromPosition(
          CONSTANTS.ERH_USERS_TABLE,
          position
        )
      );
      result = {
        imei: usersData?.imei,
        uid: usersData?.uid,
        tgUid: usersData?.tgUid,
      };
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return result;
};

export { getUserDataService };
