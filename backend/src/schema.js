import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Void

  type Todo {
    id: ID!
    body: String!
    created: String!
  }

  type Query {
    getTodos: [Todo]!
  }

  type Mutation {
    createTodo(body: String!): Todo!
    deleteTodo(todoId: ID!): Void
  }
`;

export default typeDefs;
