import { gql } from "apollo-server-core";

export default gql`
  type Parameter {
    id: Int
    parameter: String
    parameterDescription: String
    parameterOrder: Int
  }

  type Query {
    parameters: [Parameter]
  }
`;
