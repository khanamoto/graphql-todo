import Head from "next/head";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CreateTodo />
        <DeleteTodo />
        <TodoList />
      </main>
    </div>
  );
}
