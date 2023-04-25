import TodoList from "./TodoList"
import { Link } from "react-router-dom"

export default function TodoItem(props) {

    return (
      <div key={props.todo.id}>
        <Link to={`/page/${props.todo.id}`}>상세보기</Link>
        <div className="todoTitle">
          {props.todo.title}
        </div>
        <div className="todoBody">
          {props.todo.body}
        </div>
        <button className="delete-button" onClick={() => props.clickRemoveHandler(props.todo.id)}>삭제하기</button>
        <button className="complete-button" onClick={() => props.completeHandler(props.todo.id)}>
          {props.todo.isDone ? "취소하기" : "완료하기"}
        </button>
      </div>
    )
  }

