import { Request, Response } from "express";
import { getFCService } from "../services";

const getForwardCurrency = async (req: Request, res: Response) => {
  const data = await getFCService();
  return res.status(200).send({
    success: true,
    data: data,
  });
};

export { getForwardCurrency };
