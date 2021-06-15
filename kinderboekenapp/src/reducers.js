import { CHANGE_USERBOOKS } from './actions.js';

export const userBooks = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERBOOKS:
            return action.payload;
        default:
            return state;
    }
}