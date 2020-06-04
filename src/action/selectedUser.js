export const SET_SELECTED_USER_DETAIL = 'SET_SELECTED_USER_DETAIL'

export const setSelectedUserDetailAction = data => ({
    type: SET_SELECTED_USER_DETAIL,
    payload: {
        selectedUserDetail: data
    }
})