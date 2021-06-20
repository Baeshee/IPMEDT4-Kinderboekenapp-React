// Store for searchbar

import {combineReducers, createStore} from "redux";
import {searchTerm, books} from "./reducers.js";

export const store = createStore(
    combineReducers({
        searchTerm, // searchTerm: searchTerm
        books, // books:books
    })
);