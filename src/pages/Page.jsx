// import React, { useEffect } from "react";
import styled from "styled-components";
import {useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { getTodoById } from "../redux/modules/todos.js";

const Page =() => {

    
    // const dispatch = useDispatch();
    const todo = useSelector((state) => {return state.todos});

    const param = useParams();
    const navigate = useNavigate();

    const todos = todo.find((item) => item.id === param.id);

    // useEffect(() => {
    //     dispatch(getTodoByID(id));
    //   }, [dispatch, id]);

    return(
        <StContainer>
            <StDialog>
            <div>
                <StDialogHeader>
                    <div>ID :{todos.id} </div>
                    <StButton 
                    borderColor ="#ddd"
                    onClick={()=> {
                        navigate("/");
                    }}>
                    이전으로
                    </StButton>
                </StDialogHeader>
                <StTitle>{todos.title}</StTitle>
                <StBody>{todos.body}</StBody>
            </div>
            </StDialog>
        </StContainer>
    );

};

export default Page


const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  /* border: 1px solid #eee; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8fdff;
  border-radius: 12px;
  box-shadow : 2px 2px 2px 2px #d9dada;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.div`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 0px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: rgba(166, 190, 255, 0.764);
  color: white;
  border-radius: 12px;
  cursor: pointer;
`;
