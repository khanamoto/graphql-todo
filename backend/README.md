## サーバ起動

```
npm install
npm start
```

## DB 作成・マイグレーション

それぞれの環境で MySQL5.7 を起動後、

```
sequelize db:create
sequelize db:migrate
```

## Playground

```
open http://localhost:4000/playground
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
