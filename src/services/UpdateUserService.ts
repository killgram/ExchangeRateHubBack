import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

const updateUserService = async (
  data: string,
  imei: string
): Promise<boolean> => {
  try {
    const position = await RedisServices.getPosition(
      CONSTANTS.ERH_IMEI_TABLE,
      imei
    );
    if (position !== null) {
      await RedisServices.updateData(CONSTANTS.ERH_USERS_TABLE, data, position);
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return true;
};

export { updateUserService };
