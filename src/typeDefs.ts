import { gql } from "apollo-server-core";

export default gql`
  type Parameter {
    id: Int
    parameter: String
    parameterDescription: String
    parameterOrder: Int
  }

  type Book {
    id: Int
    title: String
    isbn: String
    author: String
  }

  type Query {
    parameters: [Parameter]
    books: [Book]
  }
`;
