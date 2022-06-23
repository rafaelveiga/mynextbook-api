import "reflect-metadata";
import dotenv from "dotenv";
import App from "./app";

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables

export const runServer = async () => {
  try {
    dotenv.config();
    await new App();
  } catch (error) {
    console.error(error);
  }
};

runServer();
