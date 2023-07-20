import express, { Router } from "express";
import { authenticateJWT, confirmMobileRequest } from "../middleware";
import {
  getComparedCurrency,
  getCourses,
  getForwardCurrency,
  getSubscription,
  signIn,
  subscribe,
} from "../modules";
const router: Router = express.Router();

router.get("/signIn", signIn);
router.get("/getComparedCurrency", authenticateJWT, getComparedCurrency);
router.get("/getForwardCurrency", authenticateJWT, getForwardCurrency);
router.get("/getCourses", authenticateJWT, confirmMobileRequest, getCourses);
router.post("/subscribe", authenticateJWT, subscribe);
router.get("/getSubscription", authenticateJWT, getSubscription);

export { router as MobileRouter };
