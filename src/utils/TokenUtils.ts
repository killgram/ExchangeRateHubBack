import jwt from "jsonwebtoken";
import { CONSTANTS } from "../configurations";

const generateAccessToken = (imei: string) => {
  return jwt.sign({ imei: imei }, CONSTANTS.ACCESS_TOKEN_SECRET);
};

const verifyAccessToken = (token: string): void | boolean => {
  return jwt.verify(token, CONSTANTS.ACCESS_TOKEN_SECRET, (err) => {
    return !err;
  });
};

const decodeAccessToken = (token: string): any => {
  return jwt.decode(token);
};

export { generateAccessToken, verifyAccessToken, decodeAccessToken };
