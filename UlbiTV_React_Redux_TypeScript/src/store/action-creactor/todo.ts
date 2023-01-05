import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";


export const fetchTodos = (page = 1 , limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})

            const resp = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            const data = await resp.data

            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: data})
            }, 500)

        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}


export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}
