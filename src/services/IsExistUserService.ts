import { CONSTANTS } from "../configurations";
import { RedisServices } from "./index";

const isExistUserService = async (imei: string): Promise<boolean> => {
  let result: boolean = false;
  try {
    const isExist: number | null = await RedisServices.getPosition(
      CONSTANTS.ERH_IMEI_TABLE,
      imei
    );
    if (isExist !== null) {
      result = true;
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return result;
};

export { isExistUserService };
