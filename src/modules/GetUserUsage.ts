import { Request, Response } from "express";
import { getUserUsageService } from "../services";

const getUserUsage = async (req: Request, res: Response) => {
  const data = await getUserUsageService();
  res.status(200).send({
    data: data,
    success: true,
  });
};

export { getUserUsage };
