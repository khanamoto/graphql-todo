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
        <li>
          {data?.getTodos[0]?.id} : {data?.getTodos[0]?.body}
        </li>
      </ul>
    </div>
  );
};

export default withApollo(TodoList);
