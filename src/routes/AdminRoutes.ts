import express, { Router } from "express";
import {
  addComparedCurrency,
  deleteComparedCurrency,
  getComparedCurrency,
  addForwardCurrency,
  getForwardCurrency,
  deleteForwardCurrency,
  getCourses,
  deleteUser,
  getUserUsage,
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

// courses
router.get("/getCourses", authenticateEditToken, getCourses);

// users
router.delete("/deleteUser", authenticateEditToken, deleteUser);

// usage
router.get("/getUserUsage", authenticateEditToken, getUserUsage);

export { router as AdminRouter };
