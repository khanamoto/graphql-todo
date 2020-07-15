export default {
  getTodos: async (root, args, { models }) => {
    return await models.Todo.findAll();
  },
};
