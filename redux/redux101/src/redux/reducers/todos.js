
import { ADD_TODO } from '../actionTypes'

const initialState = {
    todos: [],
    completed: []
}

export default function (state = initialState, action){

    switch (action.type){
        case ADD_TODO : {
            const { id, content } = action.payload
            return {
                ...state,
                todos: [...state.todos, {id, content, completed:false}]
            }
        }
        default:
            return state
    }
}