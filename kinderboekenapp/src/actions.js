//Actions for Searchbar

export const CHANGE_SEARCHTERM = "CHANGE_SEARCHTERM";
export const CHANGE_BOOKS = "CHANGE_BOOKS";

export const CHANGE_USERBOOKS = "CHANGE_USERBOOKS";
export const CHANGE_ACTIVEBOOK = "CHANGE_ACTIVEBOOK";

export const CHANGE_COLORVALUE = "CHANGE_COLORVALUE";
export const CHANGE_USERDATA = "CHANGE_USERDATA";
export const CHANGE_BASEURL = "CHANGE_BASEURL";
export const CHANGE_SHOWCOLORMODAL = "CHANGE_SHOWCOLORMODAL";

export const CHANGE_USERASSIGNMENTS = "CHANGE_USERASSIGNMENTS";

export const changeShowColorModal = showColorModal => ({
    type: CHANGE_SHOWCOLORMODAL,
    payload: showColorModal,
});

export const changeSearchTerm = searchTerm => ({
    type: CHANGE_SEARCHTERM,
    payload: searchTerm,
});

export const changeBooks = books => ({
    type: CHANGE_BOOKS, 
    payload: books,
});

export const changeUserBooks = userBooks => ({
    type: CHANGE_USERBOOKS,
    payload: userBooks
});

export const changeActiveBook = activeBook => ({
    type: CHANGE_ACTIVEBOOK,
    payload: activeBook
});

export const changeColor = colorValue =>({
    type: CHANGE_COLORVALUE,
    payload: colorValue
});

export const changeUserData = changeUserData =>({
    type: CHANGE_USERDATA,
    payload: changeUserData
});

export const changeBASE_URL = changeBASE_URL =>({
    type: CHANGE_BASEURL,
    payload: changeBASE_URL
});

export const changeUserAssignments = userAssingments => ({
    type: CHANGE_USERASSIGNMENTS,
    payload: userAssingments
});
