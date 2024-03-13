import mongoose from "mongoose";
import config from "config";

//Logger
import Logger from "../config/logger";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco");
  } catch (e) {
    Logger.error("Não foi possível conectar");

    Logger.error(`Error: ${e}`);
    process.exit(1);
  }
};

export default connect;
