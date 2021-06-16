export const CHANGE_USERBOOKS = "CHANGE_USERBOOKS"
export const CHANGE_ACTIVEBOOK = "CHANGE_ACTIVEBOOK"

export const changeUserBooks = userBooks => ({
    type: CHANGE_USERBOOKS,
    payload: userBooks
});

export const changeActiveBook = activeBook => ({
    type: CHANGE_ACTIVEBOOK,
    payload: activeBook
});