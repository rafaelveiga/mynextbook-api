import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, gql } from "apollo-server-core";
import http from "http";
import { parameterResolver } from "@modules/Parameters/routes";

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
      typeDefs: gql`
        type Parameter {
          id: Int
          parameter: String
          parameterDescription: String
          parameterOrder: Int
        }

        type Query {
          parameters: [Parameter]
        }
      `,
      resolvers: {
        Query: {
          parameters: async () => {
            return await parameterResolver();
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
