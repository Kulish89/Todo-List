import React from "react";
import TodoItem from "./TodoItem";
function TodoItems({ todos, onToggle, deleteTodo, editTodo, copyTodo }) {
  let arrayOfTodo = todos.filter((element) => element.completed === false);
  return (
    <div className="todoSection-items items">
      <h3 className="items-title">To do: ({arrayOfTodo.length})</h3>
      <ul className="items-list">
        {arrayOfTodo.map((todo) => {
          return (
            <TodoItem
              title={todo.title}
              key={todo.id}
              onToggle={onToggle}
              deleteTodo={deleteTodo}
              id={todo.id}
              completed={todo.completed}
              editTodo={editTodo}
              copyTodo={copyTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TodoItems;
