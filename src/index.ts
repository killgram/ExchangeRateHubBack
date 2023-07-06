import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const morgan = require("morgan");

const app: Application = express();
const PORT = process.env.PORT || 9987;

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev")); // logger

// listener
app.listen(PORT, (): void => {
  console.log(`exchange-rate-hub-back running on port here 👉 ${PORT}`);
});
