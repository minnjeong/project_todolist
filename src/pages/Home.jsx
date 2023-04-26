import React from 'react'
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Layout from '../components/Layout';


function Home() {
  return (
    <div>
      <Layout>
        <Header />
          <AddTodo />
        <TodoList/>
      </Layout>
    </div>
  )
}

export default Home;
