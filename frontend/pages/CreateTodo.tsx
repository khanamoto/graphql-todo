import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";

const Mutation = gql`
  mutation createTodo($body: String!) {
    createTodo(body: $body) {
      body
    }
  }
`;

const CreateTodo = () => {
  const [createTodo, { error, data }] = useMutation(Mutation, {
    variables: { body: "タスク" },
    optimisticResponse: {
      __typename: "Mutation",
      createTodo: {
        __typename: "Post",
        body: "タスク",
      },
    },
  });

  return <button onClick={() => createTodo()}>登録する</button>;
};

export default withApollo(CreateTodo);
