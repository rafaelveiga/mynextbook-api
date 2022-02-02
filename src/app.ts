import express from "express";

import descriptorsRouter from "@modules/DescriptorTypes/routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use("/descriptors", descriptorsRouter);
  }
}

export default App;