import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { deleteCCService } from "../services";

const deleteComparedCurrency = async (req: Request, res: Response) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const result = await deleteCCService(String(uid));
  return res.status(200).send({
    success: result,
  });
};

export { deleteComparedCurrency };
