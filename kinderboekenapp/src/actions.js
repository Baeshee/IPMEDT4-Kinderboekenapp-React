//Actions for Searchbar

export const CHANGE_SEARCHTERM = "CHANGE_SEARCHTERM";
export const CHANGE_BOOKS = "CHANGE_BOOKS";

export const changeSearchTerm = searchTerm => ({
    type: CHANGE_SEARCHTERM,
    payload: searchTerm,
});

export const changeBooks = books => ({
    type: CHANGE_BOOKS, 
    payload: books,
});
