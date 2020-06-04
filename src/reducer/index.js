import { combineReducers } from 'redux'
import { users } from './users'
import { selectedUser } from './selectedUser'
import { userMessage } from './message'

const rootReducer = combineReducers(
    {
        users,
        selectedUser,
        userMessage
    }
);

export default rootReducer
