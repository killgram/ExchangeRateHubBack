import { Request, Response } from "express";
import { CONSTANTS, ErrorsListEnum } from "../configurations";
import { v4 as uuidv4 } from "uuid";
import { RedisServices } from "../services";

const addForwardCurrency = async (req: Request, res: Response) => {
  const { forwardCurrency, langList } = req.body;
  if (!forwardCurrency || !langList) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const data = {
    forwardCurrency: forwardCurrency,
    langList: langList,
    uid: uuidv4(),
  };
  try {
    await RedisServices.addData(
      CONSTANTS.ERH_FORWARD_CURRENCY_TABLE,
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

export { addForwardCurrency };
