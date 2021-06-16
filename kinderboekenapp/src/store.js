import { combineReducers, createStore } from 'redux';
import { userBooks, activeBook } from "./reducers";

export const store = createStore(
    combineReducers({
        userBooks,
        activeBook
    })
);