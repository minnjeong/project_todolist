import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, doneTodo, deleteTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <StListContainer>
        <h2>
          Working.. 🔥
        </h2>
      <StListWrapper>
            {todo
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <StTodoContainer key={todo.id}>
                    <StLinkWrap>
                    <StLink to={`/page/${todo.id}`}>상세보기</StLink>
                    </StLinkWrap>
                    <StTitle className="todoTitle">
                      {todo.title}
                    </StTitle>
                    <StBody>
                      {todo.body}
                    </StBody>
                    <StDialogFooter>
                    <StButton borderColor="red" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</StButton>
                    <StButton borderColor="blue" onClick={() => completeHandler(todo.id)}>
                      {todo.isDone ? "취소하기" : "완료하기"}
                    </StButton>
                    </StDialogFooter>
                  </StTodoContainer>
                );
              })}
      </StListWrapper>

      <div className="list">
        <h2>
          Done..! 🎉
        </h2>
        <div className="listWrapper">
          <StListWrapper>
            {todo
              .filter((todo) => todo.isDone === true)
              .map((todo) => {
                return (
                  <StTodoContainer key={todo.id}>
                    <StLinkWrap>
                    <StLink to={`/page/${todo.id}`}>상세보기</StLink>
                    </StLinkWrap>
                    <StTitle>
                      {todo.title}
                    </StTitle>
                    <StBody>
                      {todo.body}
                    </StBody>
                    <StDialogFooter>
                    <StButton borderColor="red" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</StButton>
                    <StButton borderColor="green" onClick={() => completeHandler(todo.id)}>
                      {todo.isDone ? "취소하기" : "완료하기"}
                    </StButton>
                    </StDialogFooter>
                  </StTodoContainer>
                );
              })}
          </StListWrapper>
        </div>
      </div>
    </StListContainer>
    
  )

}

export default TodoList;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 0px;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  background-color: #f8fdff;
  box-shadow : 2px 2px 2px 2px #d9dada;
`;

const StLink = styled(Link)`
  text-decoration: none;
  border: 0px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  padding: 4px 0px;
`;

const StLinkWrap = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 12px;
  background-color: rgba(224, 232, 255, 0.764);
  display: flex;
  flex-direction: column;
`

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  margin-top: 30px;
`;

const StButton = styled.button`
  border: 0px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: rgba(166, 190, 255, 0.764);
  border-radius: 12px;
  cursor: pointer;
  
`;

const StBody = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 20px;
`

const StTitle = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 12px;
  font-size: 25px;
  font-weight: 500;

`