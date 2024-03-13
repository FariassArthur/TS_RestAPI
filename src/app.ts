//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

//db
import db from "../config/db";

//Routes
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware.";

app.use(morganMiddleware);

app.use("/api", router);

//app port
const port = config.get<number>("port"); //método get pega os dados

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
