import React from "react";
import edit from "../../img/Main/edit.svg";
import copy from "../../img/Main/copy.svg";
import del from "../../img/Main/delete.svg";

function TodoItem({
  title,
  onToggle,
  deleteTodo,
  id,
  completed,
  editTodo,
  copyTodo,
}) {
  let done = completed ? "done" : null;
  let disable = completed ? "disable" : null;
  let [titelTodo, setTitelTodo] = React.useState(title);
  let [clickEdit, setClickEdit] = React.useState(true);
  let inputRef = React.createRef();
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={completed}
        className="item-checkbox"
        onChange={() => {
          onToggle(id);
        }}
      />
      <input
        className={`item-text ${done}`}
        type="text"
        value={titelTodo}
        id={id}
        ref={inputRef}
        onChange={(e) => {
          setTitelTodo(e.target.value);
        }}
        onBlur={() => {
          editTodo(id, inputRef.current.value);
        }}
      />

      <div className="item-buttons">
        <button
          className={`item-button ${disable}`}
          onClick={() => {
            if (clickEdit) {
              inputRef.current.focus();
              setClickEdit(false);
            } else {
              inputRef.current.blur();
              editTodo(id, inputRef.current.value);
              setClickEdit(true);
            }
          }}
        >
          <img src={edit} alt="edit"></img>
        </button>

        <button
          className={`item-button ${disable}`}
          onClick={() => {
            copyTodo(id, Date.now());
          }}
        >
          <img src={copy} alt="copy"></img>
        </button>
        <button
          className="item-button"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <img src={del} alt="del"></img>
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
