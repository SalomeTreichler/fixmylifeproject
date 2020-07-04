import AppView from "../views/AppView";
import { Container } from "flux/utils";
import TodoActions from "../data/TodoActions";
import TodoStore from "../data/TodoStore";

function getStores() {
  return [TodoStore];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    onAdd: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
