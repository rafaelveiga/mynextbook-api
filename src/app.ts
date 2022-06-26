import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { parameterResolver } from "@modules/Parameters";
import typeDefs from "./typeDefs";
import { bookResolver } from "@modules/Books";

class App {
  public express: express.Application;

  public constructor() {
    this.start();
  }

  public async start(): Promise<void> {
    await createConnection();

    this.express = express();
    const httpServer = http.createServer(this.express);

    const server = new ApolloServer({
      typeDefs,
      resolvers: {
        Query: {
          parameters: async () => {
            return await parameterResolver();
          },
          books: async (_parent, args) => {
            return await bookResolver(args);
          },
        },
      },
      csrfPrevention: true,
      cache: "bounded",
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({ app: this.express });

    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve)
    );

    console.log(`🚀 Server ready at 4000${server.graphqlPath}`);
  }
}

export default App;
