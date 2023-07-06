import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import {
  getUserDataService,
  isExistUserService,
  setNewUserService,
} from "../services";
import { v4 as uuidv4 } from "uuid";
import { IUserDataTypes } from "../types";
import { TokenUtils } from "../utils";

const signIn = async (req: Request, res: Response) => {
  const { imei } = req.headers;
  if (!imei) {
    return res.status(403).send({
      success: false,
      error: ErrorsListEnum.MISSING_IMEI,
    });
  }
  const isExist: boolean = await isExistUserService(String(imei));
  const accessToken: string = TokenUtils.generateAccessToken(String(imei));
  if (isExist) {
    const userData: IUserDataTypes = await getUserDataService(String(imei));
    return res.status(200).send({
      success: true,
      uid: userData.uid,
      tgUid: userData.tgUid,
      accessToken: accessToken,
      isNewUser: false,
    });
  } else {
    const data = {
      imei: imei,
      uid: uuidv4(),
      tgUid: null,
    };
    await setNewUserService(JSON.stringify(data), String(imei));
    return res.status(200).send({
      success: true,
      uid: data.uid,
      tgUid: null,
      accessToken: accessToken,
      isNewUser: true,
    });
  }
};

export { signIn };
