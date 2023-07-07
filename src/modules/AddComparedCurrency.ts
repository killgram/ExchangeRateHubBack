import { Request, Response } from "express";
import { CONSTANTS, ErrorsListEnum } from "../configurations";
import { v4 as uuidv4 } from "uuid";
import { RedisServices } from "../services";

const addComparedCurrency = async (req: Request, res: Response) => {
  const { comparedCurrency, tableName, langList } = req.body;
  if (!comparedCurrency || !tableName || !langList) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const data = {
    comparedCurrency: comparedCurrency,
    tableName: tableName,
    langList: langList,
    uid: uuidv4(),
  };
  try {
    await RedisServices.addData(
      CONSTANTS.ERH_COMPARED_CURRENCY_TABLE,
      JSON.stringify(data)
    );
  } catch (e) {
    console.log((e as Error).message);
  }
  return res.status(200).send({
    success: true,
    data: data,
  });
};

export { addComparedCurrency };
