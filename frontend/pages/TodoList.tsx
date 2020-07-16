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
    <p>
      {data.getTodos[0].id}: {data.getTodos[0].body}
    </p>
  );
};

export default withApollo(TodoList);
