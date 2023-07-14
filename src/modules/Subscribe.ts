import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { checkInstructions, TokenUtils } from "../utils";
import { IUserDataTypes } from "../types";
import { getUserDataService, setSubscribeService } from "../services";

const subscribe = async (req: Request, res: Response) => {
  const { forwardCurrency, comparedCurrency, type, instructions } = req.body;
  if (!forwardCurrency || !comparedCurrency || !type) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const isCorrectInstruction = checkInstructions(type, instructions);
  if (!isCorrectInstruction) {
    return res.status(403).send({
      title: ErrorsListEnum.INCORRECT_INSTRUCTIONS,
      success: false,
    });
  }
  const authHeader = req.headers.authorization;
  let imei: string = "";
  if (authHeader) {
    imei = TokenUtils.decodeAccessToken(authHeader.split(" ")[1])?.imei;
  }
  const userData: IUserDataTypes = await getUserDataService(imei);
  const result = await setSubscribeService(
    forwardCurrency,
    comparedCurrency,
    imei,
    userData?.tgUid,
    type,
    instructions
  );

  res.status(200).send({
    success: result,
  });
};

export { subscribe };
