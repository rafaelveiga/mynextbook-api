import "reflect-metadata";
import dotenv from "dotenv";
import App from "./app";
import { createConnection } from "typeorm";

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables

export const Application = async () => {
  try {
    await createConnection();
    return new App().express;
  } catch (error) {
    console.error(error);
  }
};

export const runServer = async () => {
  try {
    dotenv.config();
    const port = process.env.HTTP_PORT || "3001";
    const app = await Application();
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

runServer();
