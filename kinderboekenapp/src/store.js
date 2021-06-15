import { combineReducers, createStore } from 'redux';
import { userBooks } from "./reducers";

export const store = createStore(
    combineReducers({
        userBooks,
    })
);