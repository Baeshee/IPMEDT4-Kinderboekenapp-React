import { CHANGE_USERBOOKS, CHANGE_USERASSIGNMENTS } from './actions.js';

export const userBooks = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERBOOKS:
            return action.payload;
        default:
            return state;
    }
}

export const userAssignments = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERASSIGNMENTS:
            return action.payload;
        default:
            return state;
    }
}