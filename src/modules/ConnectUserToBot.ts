import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { IUserDataTypes } from "../types";
import { getUserDataService, updateUserService } from "../services";

const connectUserToBot = async (req: Request, res: Response) => {
  const { imei, tgUid } = req.body;
  if (!imei || !tgUid) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const userData: IUserDataTypes = await getUserDataService(String(imei));

  if (userData?.uid) {
    const data = {
      imei: imei,
      uid: userData?.uid,
      tgUid: tgUid,
    };
    await updateUserService(JSON.stringify(data), imei);
    return res.status(200).send({
      data: data,
      success: true,
    });
  } else {
    return res.status(404).send({
      title: ErrorsListEnum.USER_NOT_FOUND,
      success: false,
    });
  }
};

export { connectUserToBot };
