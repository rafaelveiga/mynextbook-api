import { gql } from "apollo-server-core";

export default gql`
  type Parameter {
    id: Int
    parameter: String
    parameterDescription: String
    parameterOrder: Int
  }

  type BookParameter {
    id: Int
    parameterValue: String
    parameter: Parameter
  }

  type Book {
    id: Int
    title: String
    isbn: String
    author: String
    bookDescriptors: [BookParameter]
  }

  type Query {
    parameters: [Parameter]
    books(parameterPair: [ParameterPair]): [Book]
  }

  scalar ParameterPair
  {
    parameterId: string
    parameterValue: String
  }
`;
