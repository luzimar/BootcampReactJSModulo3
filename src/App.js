import React from "react";
import "./config/reactotron";
import { Provider } from "react-redux";
import store from "./store/index";
import TodoList from "./TodoList";

console.tron.log("Testando");

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
