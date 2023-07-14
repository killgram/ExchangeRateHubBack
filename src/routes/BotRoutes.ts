import express, { Router } from "express";
import { connectUserToBot } from "../modules";
import { authenticateBotToken } from "../middleware";
const router: Router = express.Router();

router.post("/connectUserToBot", authenticateBotToken, connectUserToBot);

export { router as BotRouter };
