export default {
  createTodo: async (root, { body }, { models }) => {
    return models.Todo.create({
      body,
    });
  },

  deleteTodo: async (root, { todoId }, { models }) => {
    const todo = await models.Todo.findByPk(todoId);
    return todo.destroy();
  },
};
