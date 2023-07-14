import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

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
      })
    );
    return true;
  } catch (e) {
    console.log((e as Error).message);
    return false;
  }
};

export { setSubscribeService };
