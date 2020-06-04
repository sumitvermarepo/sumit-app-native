import { SET_SELECTED_USER_DETAIL } from "../action/selectedUser";

const initialState = {
    selectedUserDetail: {}
};

export const selectedUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_USER_DETAIL:
            return {
                ...state,
                selectedUserDetail: action.payload.selectedUserDetail
            };
        default:
            return state;
    }
}