import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";
import { v4 as uuidv4 } from "uuid";

const setSubscribeService = async <T>(
  forwardCurrency: string,
  comparedCurrency: string,
  imei: string,
  tgUid: null | string | number,
  type: string,
  instructions?: T
) => {
  try {
    await RedisServices.addData(
      CONSTANTS.BOT_DAEMON_TABLE,
      JSON.stringify({
        forwardCurrency: forwardCurrency,
        comparedCurrency: comparedCurrency,
        imei: imei,
        tgUid: tgUid,
        type: type,
        instructions: instructions,
        uid: uuidv4(),
      })
    );
    return true;
  } catch (e) {
    console.log((e as Error).message);
    return false;
  }
};

export { setSubscribeService };
