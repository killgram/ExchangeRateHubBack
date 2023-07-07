import { Request, Response, NextFunction } from "express";
import { TokenUtils } from "../utils";
import { ErrorsListEnum } from "../configurations";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (TokenUtils.verifyAccessToken(token)) {
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

export { authenticateJWT };
