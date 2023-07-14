import express, { Router } from "express";
import { authenticateJWT, confirmMobileRequest } from "../middleware";
import {
  getComparedCurrency,
  getCourses,
  getForwardCurrency,
  signIn,
} from "../modules";
const router: Router = express.Router();

router.get("/signIn", signIn);
router.get("/getComparedCurrency", authenticateJWT, getComparedCurrency);
router.get("/getForwardCurrency", authenticateJWT, getForwardCurrency);
router.get("/getCourses", authenticateJWT, confirmMobileRequest, getCourses);

export { router as MobileRouter };
