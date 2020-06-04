import { SET_USER_MESSAGE } from "../action/message";


const initialState = {
    userMessages: []
};

export const userMessage = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_MESSAGE:
            const updatedMessage = [...state.userMessages]
            updatedMessage.push(action.payload)
            return {
                ...state,
                userMessages: updatedMessage
            };
        default:
            return state;
    }
}