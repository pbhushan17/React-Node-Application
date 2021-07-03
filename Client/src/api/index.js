import axios from 'axios';
const url ="http://localhost:5000/todo";

export const readTodos  = ()=> {
    return axios.get(url);
}

export const createTodos = (newTodo)=> {
    return axios.post(url, newTodo);
}