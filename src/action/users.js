export const SET_USER_DETAIL = 'SET_USER_DETAIL'

export const setUserDetail = data => ({
    type: SET_USER_DETAIL,
    payload: {
        userDetails: data
    }
})