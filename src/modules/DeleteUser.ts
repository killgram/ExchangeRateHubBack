import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { deleteUserService } from "../services";

const deleteUser = async (req: Request, res: Response) => {
  const { imei } = req.body;
  if (!imei) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const result = await deleteUserService(String(imei));
  return res.status(200).send({
    success: result,
  });
};

export { deleteUser };
