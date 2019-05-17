const INITIAL_STATE = [
  {
    id: 1,
    text: "Fazer café"
  },
  {
    id: 2,
    text: "Estudar react"
  }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.obj.todo];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.obj.id);
    default:
      return state;
  }
}
