import { RedisServices } from "./index";
import { CONSTANTS } from "../configurations";
import { IUserUsageTypes } from "../types";

const getUserUsageService = async () => {
  let result: Array<IUserUsageTypes> = [];
  const data = await RedisServices.getData(CONSTANTS.ERH_USAGE_TABLE);
  data?.forEach((v: string) => {
    result.push(JSON.parse(v));
  });
  return result.sort((a, b) => b.usageCount - a.usageCount);
};

export { getUserUsageService };
