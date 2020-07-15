import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "../resolvers";
import models from "../models";

// サーバのインスタンスを新規作成
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

// webサーバを起動
server
  .listen()
  .then(({ url }) => console.log("GraphQL Service running on ${url}"));
