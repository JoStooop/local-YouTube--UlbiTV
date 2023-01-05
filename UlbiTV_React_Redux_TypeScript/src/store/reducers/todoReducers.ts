import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    pagination: 1,
    limit: 10,
}

export const todoReducers = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, pagination: action.payload}

        default:
            return state
    }
}
