import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            const data = await resp.data
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data})
            }, 2000)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
