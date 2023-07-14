import { Request, Response, NextFunction } from "express";
import { TokenUtils } from "../utils";
import { userUsageService } from "../services";

const confirmMobileRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const imei = TokenUtils.decodeAccessToken(authHeader.split(" ")[1])?.imei;
    if (imei) {
      await userUsageService(imei);
    }
  }
};

export { confirmMobileRequest };
