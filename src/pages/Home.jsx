import React from 'react'
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";


function Home() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList/>
    </div>
  )
}

export default Home;
