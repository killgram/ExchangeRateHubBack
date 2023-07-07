import express, { Router } from "express";
import {
  addComparedCurrency,
  deleteComparedCurrency,
  getComparedCurrency,
  addForwardCurrency,
  getForwardCurrency,
  deleteForwardCurrency,
} from "../modules";
import { authenticateEditToken } from "../middleware";
const router: Router = express.Router();

// compared currency
router.post("/addComparedCurrency", authenticateEditToken, addComparedCurrency);
router.delete(
  "/deleteComparedCurrency",
  authenticateEditToken,
  deleteComparedCurrency
);
router.get("/getComparedCurrency", authenticateEditToken, getComparedCurrency);

// forward currency
router.post("/addForwardCurrency", authenticateEditToken, addForwardCurrency);
router.delete(
  "/deleteForwardCurrency",
  authenticateEditToken,
  deleteForwardCurrency
);
router.get("/getForwardCurrency", authenticateEditToken, getForwardCurrency);

export { router as AdminRouter };
