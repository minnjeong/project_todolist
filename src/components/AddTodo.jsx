import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";



function AddTodo() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');

    const titleChageHandler = (event) => {
        setTitle(event.target.value);
    };

    const bodyChangeHandler = (event) => {
        setBody(event.target.value);
    };
    const dispatch = useDispatch();

    const clickAddButtonHandler = () => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          body: body,
          isDone: false,
        }
        dispatch(addTodo(newTodo));
      };
    
   

    return (
        <div className="layout">
            {/* <div className="container">
                <div>🤍&nbsp;My Todo List&nbsp;🤍</div>
                <div>React</div>
            </div> */}
            <div className="listAdd">
                <div className="input-group">

                    <label className="form-label">제목</label>
                    <input value={title} onChange={titleChageHandler} />
                    <label>내용</label>
                    <input value={body} onChange={bodyChangeHandler} />
                </div>
                <button className="add-button" onClick={clickAddButtonHandler}>추가하기</button>
            </div>
        </div>
    );

 };
export default AddTodo;