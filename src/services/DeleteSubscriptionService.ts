import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

const deleteSubscriptionService = async (uid: string) => {
  try {
    const tableDaemon = await RedisServices.getData(CONSTANTS.BOT_DAEMON_TABLE);
    let foundItem;
    tableDaemon?.forEach((item: string) => {
      const ccItem = JSON.parse(item);
      if (ccItem?.uid === uid) {
        foundItem = ccItem;
      }
    });
    if (foundItem) {
      await RedisServices.deleteData(
        CONSTANTS.BOT_DAEMON_TABLE,
        JSON.stringify(foundItem)
      );
      return true;
    }
  } catch (e) {
    console.log((e as Error).message);
    return false;
  }
};

export { deleteSubscriptionService };
