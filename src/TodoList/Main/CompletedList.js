import React from "react";
import TodoItem from "./TodoItem";

function CompletedList({ todos, onToggle, deleteTodo }) {
  let completedTodoes = todos.filter((element) => element.completed === true);
  return (
    <div className="completedlist">
      <h3 className="items-title">Completed: ({completedTodoes.length})</h3>
      <div className="items-list">
        {completedTodoes.length ? (
          completedTodoes.map((todo) => {
            return (
              <TodoItem
                title={todo.title}
                key={todo.id}
                completed={todo.completed}
                deleteTodo={deleteTodo}
                onToggle={onToggle}
                id={todo.id}
              />
            );
          })
        ) : (
          <span className="items-title">No completed doing.</span>
        )}
      </div>
    </div>
  );
}
export default CompletedList;
