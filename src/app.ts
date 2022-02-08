import express from "express";
import cors from "cors";

import parametersRouter from "@modules/Parameters/routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use("/parameters", parametersRouter);
  }
}

export default App;
