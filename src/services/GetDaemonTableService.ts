import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";
import { DaemonTableItemTypes } from "../types";

const getDaemonTableService = async (imei?: string) => {
  const table = await RedisServices.getData(CONSTANTS.BOT_DAEMON_TABLE);
  if (table) {
    const tableParse = table?.map((v: string) => JSON.parse(v));
    if (imei) {
      return tableParse?.filter((q: DaemonTableItemTypes) => q?.imei === imei);
    } else {
      return tableParse;
    }
  }
};

export { getDaemonTableService };
