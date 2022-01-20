import express from "express";

// import betsRouter from "@modules/Bets/routes";
// import userRouter from "@modules/User/routes";
// import bookmakersRouter from "@modules/Bookmakers/routes";
// import transactionsRouter from "@modules/Transactions/routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    // this.express.use(cors());
  }

  private routes(): void {
    // this.express.use("/bets", betsRouter);
    // this.express.use("/user", userRouter);
    // this.express.use("/bookmakers", bookmakersRouter);
    // this.express.use("/transactions", transactionsRouter);
  }
}

export default App;
