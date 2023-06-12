import {ITodo} from "./Interfaces/ITodo";

export default function(state: ITodo[], action: any) {
    switch (action.type) {
        case 'add':
            state = [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.todoTitle,
                    completed: false
                }
            ]
            return state
        case 'toggle':
            return state.map((todo: ITodo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case 'remove':
            return state.filter((todo: ITodo) => todo.id !== action.payload)
        case 'clear-completed':
            return state.filter((todo: ITodo) => !todo.completed)
        default:
            return state
    }
}