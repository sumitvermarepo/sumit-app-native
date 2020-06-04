import { SET_USER_DETAIL } from "../action/users";
import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from "../action/actionTypes";

const initialState = {
    isLoading: false,
    userDetails: [],
    user: {}
};
export const users = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
        case CREATE_USER_FAILURE:
            return {
                ...state,
                isLoading: true
            }
         case CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.user
            }
        default:
            return state;
    }
}