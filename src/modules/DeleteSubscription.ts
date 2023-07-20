import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { deleteSubscriptionService } from "../services";

const deleteSubscription = async (req: Request, res: Response) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  const result = await deleteSubscriptionService(String(uid));
  res.status(200).send({
    success: result,
  });
};

export { deleteSubscription };
