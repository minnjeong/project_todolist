import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, doneTodo, deleteTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
민정님 코드 공유좀...ㅎ_ㅎ -ㅈㅅㅇ-

function TodoList() {
    const todo = useSelector((state) => {
        return state.todos;
      })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //할일 삭제 버튼 클릭
  const clickRemoveHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // 완료 버튼 클릭
  const completeHandler = (id) => {
    dispatch(doneTodo(id));
  };

  // 취소 버튼 클릭
  const cancleHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const user = useSelector((store) => store.reducer_user);

  return (
    <div className="lists">
      <div className="list">
        <span>
          Working.. 🔥
        </span>
        <div className="listWrapper">
          <div className="listContainer">
            {todo
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <Link to={`/page/${todo.id}`}>상세보기</Link>
                    <div className="todoTitle">
                      {todo.title}
                    </div>
                    <div className="todoBody">
                      {todo.body}
                    </div>
                    <button className="delete-button" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</button>
                    <button className="complete-button" onClick={() => completeHandler(todo.id)}>
                      {todo.isDone ? "취소하기" : "완료하기"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="list">
        <span>
          Done..! 🎉
        </span>
        <div className="listWrapper">
          <div className="listContainer">
            {todo
              .filter((todo) => todo.isDone === true)
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <Link to={`/page/${todo.id}`}>상세보기</Link>
                    <div className="todoTitle">
                      {todo.title}
                    </div>
                    <div className="todoBody">
                      {todo.body}
                    </div>
                    <button className="delete-button" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</button>
                    <button className="complete-button" onClick={() => completeHandler(todo.id)}>
                      {todo.isDone ? "취소하기" : "완료하기"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
    
  )

}

export default TodoList;