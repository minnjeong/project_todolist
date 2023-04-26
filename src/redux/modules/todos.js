import { v4 as uuidv4 } from "uuid";

// Action value
const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DEL_TODO = "DEL_TODO";
const GET_ID = "GET_ID";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const doneTodo = (payload) => {
    return {
        type: DONE_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DEL_TODO,
        payload,
    };
};

export const getTodoById = (payload) => {
    return {
        type: GET_ID,
        payload,
    };
};
// `addTodo`, `deleteTodo`, `toggleStatusTodo`, `getTodoById`



// initial state(초기값)
const initialState = [{
    id: uuidv4(),
    title: "",
    body: "",
    isDone: false,
}]

//리듀서

const todos = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]

        case DONE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                } else {
                    return todo;
                }
            });  

        case DEL_TODO:
            return state.filter((todo) => todo.id !== action.payload);

        case GET_ID:
            return
            state.find((todo) => {
                return todos.id === action.payload;
            })

        default:
            return state;




    }
}

export default todos;