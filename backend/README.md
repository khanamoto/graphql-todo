## サーバ起動

```
npm install
npm start
```

## Playground

```
open http://localhost:4000
```

## サンプル

```
mutation create {
  createTodo (
    body: "タスク1"
  ) {
    id
    body
  }
}

mutation delete {
  deleteTodo (
    todoId: "1"
  )
}

query getAll {
  getTodos {
    id
    body
  }
}
```
