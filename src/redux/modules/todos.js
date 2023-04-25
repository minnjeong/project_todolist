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
        //   {
        //     id: Math.floor(Math.random()* 1000),
        //     title: title,
        //     body: body,
        //     isDone: false,
        //   }
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
   
    // case ADD_CONTENT:
//             const id = state.total.length
//                 ? state.total[state.total.length - 1].id + 1
//                 : 0;
//             const title = action.payload.title,
//                 desc = action.payload.desc;
//             let newCard;
//             if (title === "" || desc === "") {
//                 alert("제목 또는 내용이 비어있는지 확인해주세요!");
//                 return state;
//             } else {
//                 newCard = {
//                     title,
//                     desc,
//                     id,
//                     done: false,
//                 };
//                 return { ...state, total: [...state.total, newCard] }; // 중요!⭐ 객체는 먼저 한 번 뿌리고 뒤에서 프로퍼티 찾아서 바꾸는 식으로 생각.
//             }
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
        // case DONE_TODO:
        //     return [...state, state.map((state) => {
        //         if (state.id === action.payload) {
        //             return {
        //                 ...state,
        //                 isDone: !state.isDone,
        //             };
        //         } else {
        //             return state;
        //         }
        //     })]

        case DEL_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        // const delTodo = todo.filter((todo) => todo.id !== id);


        case GET_ID:
            return
            state.find((todo) => {
                return todos.id === action.payload;
            })

        default:
            return state;




    }
}
// action ={
//     type: ADD_TODO,
//     payload : {
//     id: Math.floor(Math.random()* 1000),
//     title: title,
//     body: body,
//     isDone: false,
//   }}

export default todos;