export const addTodo = todo => ({
  type: "ADD_TODO",
  obj: { todo }
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  obj: { id }
});
