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
    const usersData = await RedisServices.getData(CONSTANTS.ERH_USERS_TABLE);
    usersData?.forEach((v: string): void => {
      const tData: IUserDataTypes = JSON.parse(v);
      if (tData?.imei === imei) {
        result = {
          imei: tData?.imei,
          uid: tData?.uid,
          tgUid: tData?.tgUid,
        };
      }
    });
  } catch (e) {
    console.log((e as Error).message);
  }
  return result;
};

export { getUserDataService };
