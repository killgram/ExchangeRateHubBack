import express, { Router } from "express";
import { authenticateJWT, confirmMobileRequest } from "../middleware";
import {
  deleteSubscription,
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
router.delete("/deleteSubscription", authenticateJWT, deleteSubscription);

export { router as MobileRouter };
