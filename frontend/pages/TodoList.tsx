import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";

const QUERY = gql`
  {
    getTodos {
      id
      body
    }
  }
`;

const TodoList = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <p>Todoリスト</p>
      <ul>
        {data?.getTodos?.map((todo) => (
          <li key={todo.id}>
            {todo.id}：{todo.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withApollo(TodoList);
