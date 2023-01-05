import {combineReducers} from "redux";
import {userReducers} from "./userReducers";
import {todoReducers} from "./todoReducers";

export const rootReducers = combineReducers({
    user: userReducers,
    todo: todoReducers,
})

export type RootState = ReturnType<typeof rootReducers>
