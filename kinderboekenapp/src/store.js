import { combineReducers, createStore } from 'redux';
import { userBooks, userAssignments } from "./reducers";

export const store = createStore(
    combineReducers({
        userBooks,
        userAssignments
    })
);