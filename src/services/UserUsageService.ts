import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";

const userUsageService = async (imei: string): Promise<boolean> => {
  try {
    const position = await RedisServices.getPosition(
      CONSTANTS.ERH_IMEI_TABLE,
      imei
    );
    if (position !== null) {
      const usersData = JSON.parse(
        await RedisServices.getDataFromPosition(
          CONSTANTS.ERH_USAGE_TABLE,
          position
        )
      );
      if (usersData) {
        const data = {
          imei: imei,
          usageCount: usersData?.usageCount + 1,
          lastUsage: Date.now(),
        };
        await RedisServices.updateData(
          CONSTANTS.ERH_USAGE_TABLE,
          JSON.stringify(data),
          position
        );
      }
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  return true;
};

export { userUsageService };
