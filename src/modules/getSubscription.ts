import { Request, Response } from "express";
import { TokenUtils } from "../utils";
import { getDaemonTableService } from "../services";

const getSubscription = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  let imei: string = "";
  if (authHeader) {
    imei = TokenUtils.decodeAccessToken(authHeader.split(" ")[1])?.imei;
  }
  const table = await getDaemonTableService(imei);
  res.status(200).send({
    data: table,
    success: true,
  });
};

export { getSubscription };
