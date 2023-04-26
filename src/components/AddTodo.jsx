
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
          <StAddForm>
            <StInputGroup>
                    <StFormLabel>제목</StFormLabel>
                    <StAddInput value={title} onChange={titleChageHandler} />
                    <StFormLabel>내용</StFormLabel>
                    <StAddInput value={body} onChange={bodyChangeHandler} />
            </StInputGroup>
                <StAddButton onClick={clickAddButtonHandler}>추가하기</StAddButton>
          </StAddForm>
        </div>
    );
 };
export default AddTodo;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;

`;

const StAddForm = styled.div`
  font-size: 15px;
  color: rgb(81, 116, 213);
  align-items: center;
  background-color: aliceblue;
  border: 0px solid #d0e2ec;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 30px;
  font-weight: 500;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(81, 116, 213);
  width: 140px;
  color: #fff;
  font-weight: 700;
`;