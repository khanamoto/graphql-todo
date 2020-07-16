import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";

const Mutation = gql`
  {
    createTodo(body: $body) {
      id
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
