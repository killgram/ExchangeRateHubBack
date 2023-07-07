import express, { Router } from "express";
import {
  addComparedCurrency,
  deleteComparedCurrency,
  getComparedCurrency,
} from "../modules";
import { authenticateEditToken } from "../middleware";
const router: Router = express.Router();

router.post("/addComparedCurrency", authenticateEditToken, addComparedCurrency);
router.delete(
  "/deleteComparedCurrency",
  authenticateEditToken,
  deleteComparedCurrency
);
router.get("/getComparedCurrency", authenticateEditToken, getComparedCurrency);

export { router as AdminRouter };
