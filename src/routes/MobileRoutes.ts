import express, { Router } from "express";
import { authenticateJWT } from "../middleware";
import { getComparedCurrency, getForwardCurrency, signIn } from "../modules";
const router: Router = express.Router();

router.get("/signIn", signIn);
router.get("/getComparedCurrency", authenticateJWT, getComparedCurrency);
router.get("/getForwardCurrency", authenticateJWT, getForwardCurrency);

export { router as MobileRouter };
