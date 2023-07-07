import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
const morgan = require("morgan");
import { initRedisClient } from "./configurations";
import { AdminRouter, CommonRouter, MobileRouter } from "./routes";
const path = require("path");

const app: Application = express();
const PORT = process.env.PORT || 9987;

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev")); // logger

// Mobile
app.use("/mobile", MobileRouter);

// Common
app.use("/common", CommonRouter);

// Admin
app.use("/admin", AdminRouter);

// static
app.use("/orchid", express.static(path.join(__dirname, "public")));

// init redis
initRedisClient().then((_) => {});

// listener
app.listen(PORT, (): void => {
  console.log(`exchange-rate-hub-back running on port here 👉 ${PORT}`);
});
