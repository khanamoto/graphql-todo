import Head from "next/head";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList />
        <CreateTodo />
      </main>
    </div>
  );
}
