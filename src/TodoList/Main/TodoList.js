import React from "react";
import AddTask from "./AddTask";
import TodoItems from "./TodoItems";

function TodoList({
  todos,
  onToggle,
  deleteTodo,
  createNewTodo,
  editTodo,
  copyTodo,
}) {
  return (
    <div className="todoSection">
      <AddTask todos={todos} createNewTodo={createNewTodo} />
      <TodoItems
        todos={todos}
        onToggle={onToggle}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        copyTodo={copyTodo}
      />
    </div>
  );
}
export default TodoList;
