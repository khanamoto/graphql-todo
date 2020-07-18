import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { __InputValue } from "graphql";
import { create } from "domain";
import { useState } from "react";

const Mutation = gql`
  mutation deleteTodo($todoId: ID!) {
    deleteTodo(todoId: $todoId)
  }
`;

const DeleteTodo = () => {
  const [todoId, setTodoId] = useState("");

  const [deleteTodo, { error, data }] = useMutation(Mutation, {
    variables: { todoId: todoId },
    optimisticResponse: {
      __typename: "Mutation",
      deleteTodo: {
        __typename: "Post",
        todoId: todoId,
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoId === "") {
      window.alert("Input required!");
      return false;
    }

    deleteTodo();

    // フォームリセット
    // e.target.elements.todoId.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        No：
        <input
          type="text"
          name="todoId"
          onChange={(e) => setTodoId(e.target.value)}
        />
      </label>
      <button>削除する</button>
    </form>
  );
};

export default withApollo(DeleteTodo);
