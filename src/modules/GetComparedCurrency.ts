import { Request, Response } from "express";
import { getCCService } from "../services";

const getComparedCurrency = async (req: Request, res: Response) => {
  const data = await getCCService();
  return res.status(200).send({
    success: true,
    data: data,
  });
};

export { getComparedCurrency };
