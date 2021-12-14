import React, { useState, useEffect } from "react";
import Header from "./TodoList/Header";
import SideBar from "./TodoList/SideBar";
import Content from "./TodoList/Main/Content";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((todos) => {
        let arrayOfTodoes = todos.filter((todo) => todo.userId === 1);
        arrayOfTodoes.forEach((element) => {
          element.completed = false;
        });
        setTodos(arrayOfTodoes);
      });
  }, []);
  function deleteTodo(id) {
    let filtredArr = todos.filter((element) => element.id !== id);
    setTodos(filtredArr);
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function editTodo(id, text) {
    todos.find((todo) => todo.id === id).title = text;
    setTodos(todos);
  }
  function createTodo(id, todoText) {
    setTodos(
      todos.concat({
        userId: 1,
        id: id,
        title: todoText,
        body: "0",
        completed: false,
      })
    );
  }
  function copyTodo(id, newId) {
    let task = todos.find((todo) => todo.id === id);
    createTodo(newId, task.title);
  }

  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <main className="main">
        <Content
          todos={todos}
          onToggle={toggleTodo}
          deleteTodo={deleteTodo}
          createNewTodo={createTodo}
          editTodo={editTodo}
          copyTodo={copyTodo}
        />
      </main>
    </div>
  );
}

export default App;
