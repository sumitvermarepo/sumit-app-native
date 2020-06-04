export const SET_USER_MESSAGE = "SET_USER_MESSAGE"

export const setUserMessage = data => ({
    type: SET_USER_MESSAGE,
    payload: {
        message: data.message,
        type: data.type
    }
})