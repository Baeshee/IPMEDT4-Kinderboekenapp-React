export const CHANGE_USERBOOKS = "CHANGE_USERBOOKS"
export const CHANGE_ACTIVEBOOK = "CHANGE_ACTIVEBOOK"
export const CHANGE_USERASSIGNMENTS = "CHANGE_USERASSIGNMENTS"

export const changeUserAssignments = userAssingments => ({
    type: CHANGE_USERASSIGNMENTS,
    payload: userAssingments
});

export const changeActiveBook = activeBook => ({
    type: CHANGE_ACTIVEBOOK,
    payload: activeBook
});