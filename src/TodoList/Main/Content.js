import React from "react";
import "../../App.css";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";
function Content({
  todos,
  onToggle,
  deleteTodo,
  createNewTodo,
  editTodo,
  copyTodo,
}) {
  return (
    <div className="content">
      <TodoList
        todos={todos}
        onToggle={onToggle}
        deleteTodo={deleteTodo}
        createNewTodo={createNewTodo}
        editTodo={editTodo}
        copyTodo={copyTodo}
      />
      <CompletedList
        todos={todos}
        onToggle={onToggle}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
export default Content;
