import React from "react";
function AddTask({ todos, createNewTodo }) {
  let [text, setText] = React.useState("");
  let [disable, toggleDisable] = React.useState(true);
  return (
    <div className="todoSection-addSection addSection">
      <div className="addSection-addTask">
        <input
          name="todotext"
          type="text"
          className="addSection-input"
          placeholder="+ Add a task, press Enter to save"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            toggleDisable(false);
          }}
        />
        <button
          disabled={disable}
          className="addSection-button"
          onClick={() => {
            if (text) {
              createNewTodo(Date.now(), text);
              setText("");
              toggleDisable(true);
            }
          }}
        >
          Add
        </button>
      </div>
      <div className="addSection-count count">
        <span className="count-text">Total:</span>
        <span className="count-number">{todos.length}</span>
      </div>
    </div>
  );
}
export default AddTask;
