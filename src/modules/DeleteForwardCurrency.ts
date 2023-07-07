import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { deleteFCService } from "../services";

const deleteForwardCurrency = async (req: Request, res: Response) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const result = await deleteFCService(String(uid));
  return res.status(200).send({
    success: result,
  });
};

export { deleteForwardCurrency };
