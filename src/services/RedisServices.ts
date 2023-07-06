import { client } from "../configurations";

const getPosition = async (
  table: string,
  value: string
): Promise<number | null> => {
  return await client.lPos(table, value);
};

const getData = async (table: string): Promise<any> => {
  return await client.lRange(table, 0, -1);
};

const addData = async (table: string, data: string) => {
  return await client.rPush(table, data);
};

export { getPosition, getData, addData };
