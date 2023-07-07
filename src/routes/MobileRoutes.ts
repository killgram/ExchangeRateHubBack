import express, { Router } from "express";
import { authenticateJWT } from "../middleware";
import { getComparedCurrency, signIn } from "../modules";
const router: Router = express.Router();

router.get("/signIn", signIn);
router.get("/getComparedCurrency", authenticateJWT, getComparedCurrency);

export { router as MobileRouter };
