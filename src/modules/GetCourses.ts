import { Request, Response } from "express";
import { ErrorsListEnum } from "../configurations";
import { getCCService, getCoursesService, getFCService } from "../services";

const getCourses = async (req: Request, res: Response) => {
  const { comparedCurrency, forwardCurrency } = req.query;
  if (!comparedCurrency || !forwardCurrency) {
    return res.status(403).send({
      title: ErrorsListEnum.QUERY_PARAM_IS_MISSING,
      success: false,
    });
  }
  let foundCCTable = null;
  let foundFC = null;
  const ccCurrency = await getCCService();
  ccCurrency?.forEach((item) => {
    if (item?.comparedCurrency === String(comparedCurrency)?.toUpperCase()) {
      foundCCTable = item?.tableName;
    }
  });
  if (!foundCCTable) {
    return res.status(403).send({
      title: ErrorsListEnum.NOT_FOUND_COMPARED_CURRENCY,
      success: false,
    });
  }

  const fcCurrency = await getFCService();
  fcCurrency?.forEach((item) => {
    if (item?.forwardCurrency === String(forwardCurrency)?.toUpperCase()) {
      foundFC = item?.forwardCurrency?.toLowerCase();
    }
  });
  if (!foundFC) {
    return res.status(403).send({
      title: ErrorsListEnum.NOT_FOUND_FORWARD_CURRENCY,
      success: false,
    });
  }
  const courses = await getCoursesService(foundCCTable, foundFC);
  res.status(200).send({
    success: true,
    courses: courses,
  });
};

export { getCourses };
