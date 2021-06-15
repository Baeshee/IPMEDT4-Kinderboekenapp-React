export const CHANGE_USERBOOKS = "CHANGE_USERBOOKS"

export const changeUserBooks = userBooks => ({
    type: CHANGE_USERBOOKS,
    payload: userBooks
});