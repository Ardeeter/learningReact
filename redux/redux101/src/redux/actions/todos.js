import {ADD_TODO} from '../actionTypes';


// Action Creator
export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        payload: value
    }
}