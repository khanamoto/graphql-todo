import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { __InputValue } from "graphql";
import { create } from "domain";
import { useState } from "react";

const Mutation = gql`
  mutation createTodo($body: String!) {
    createTodo(body: $body) {
      body
    }
  }
`;

const CreateTodo = () => {
  const [body, setBody] = useState("");

  const [createTodo, { error, data }] = useMutation(Mutation, {
    variables: { body: body },
    optimisticResponse: {
      __typename: "Mutation",
      createTodo: {
        __typename: "Post",
        body: body,
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body === "") {
      window.alert("Input required!");
      return false;
    }

    createTodo();

    // フォームリセット
    // e.target.elements.body.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo：
        <input
          type="text"
          name="todo"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <button>登録する</button>
    </form>
  );
};

export default withApollo(CreateTodo);
