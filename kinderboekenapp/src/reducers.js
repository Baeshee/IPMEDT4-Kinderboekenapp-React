import { CHANGE_USERBOOKS, CHANGE_ACTIVEBOOK } from './actions.js';

export const userBooks = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERBOOKS:
            return action.payload;
        default:
            return state;
    }
}

export const activeBook = (state = "", action) => {
    switch (action.type){
        case CHANGE_ACTIVEBOOK:
            return action.payload;
        default:
            return state;
    }
}