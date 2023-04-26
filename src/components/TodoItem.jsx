import TodoList from "./TodoList"
import { Link } from "react-router-dom"
import styled from "styled-components";

export default function TodoItem(props) {

    return (
      <StTodoContainer key={props.todo.id}>
        <StLink to={`/page/${props.todo.id}`}>상세보기</StLink>
        <div className="todoTitle">
          {props.todo.title}
        </div>
        <div className="todoBody">
          {props.todo.body}
        </div>
        <StDialogFooter>
        <StButton className="delete-button" onClick={() => props.clickRemoveHandler(props.todo.id)}>삭제하기</StButton>
        <StButton className="complete-button" onClick={() => props.completeHandler(props.todo.id)}>
          {props.todo.isDone ? "취소하기" : "완료하기"}
        </StButton>
        </StDialogFooter>
      </StTodoContainer>
    )
  }




const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

