import { Request, Response, NextFunction } from "express";
import { CONSTANTS, ErrorsListEnum } from "../configurations";

const authenticateBotToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token === CONSTANTS.EDIT_BOT_TOKEN) {
      next();
    } else {
      return res.status(403).send({
        title: ErrorsListEnum.FORBIDDEN,
        success: false,
      });
    }
  } else {
    return res.status(403).send({
      title: ErrorsListEnum.FORBIDDEN,
      success: false,
    });
  }
};

export { authenticateBotToken };
