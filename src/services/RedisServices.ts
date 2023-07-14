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

const getDataFromPosition = async (
  table: string,
  position: number
): Promise<any> => {
  return await client.lIndex(table, position);
};

const addData = async (table: string, data: string) => {
  return await client.rPush(table, data);
};

const deleteData = async (table: string, data: string) => {
  return await client.LREM(table, 1, data);
};

const updateData = async (table: string, data: string, index: number) => {
  return await client.lSet(table, index, data);
};

export {
  getPosition,
  getData,
  addData,
  getDataFromPosition,
  deleteData,
  updateData,
};
