// import React, { useEffect } from "react";
// import styled from "styled-components";
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
        <container>
            <div>
                <header>
                    <div>ID :{todos.id} </div>
                    <button 
                    borderColor ="#ddd"
                    onClick={()=> {
                        navigate("/");
                    }}>
                    이전으로
                    </button>
                </header>
                <div>{todos.title}</div>
                <div>{todos.body}</div>
            </div>
        </container>
    );

};

export default Page