import express, { Router } from "express";
import { getWorkStatus } from "../modules";
const router: Router = express.Router();

router.get("/status", getWorkStatus);

export { router as CommonRouter };
