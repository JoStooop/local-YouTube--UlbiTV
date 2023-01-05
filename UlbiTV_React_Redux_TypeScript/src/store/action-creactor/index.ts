import * as UserActionCreator from "../action-creactor/user"
import * as TodoActionCreator from "../action-creactor/todo"

export default {
    ...UserActionCreator,
    ...TodoActionCreator
}
