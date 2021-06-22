import { combineReducers } from "redux";
import auth from "./reducer_auth";
import message from "./reducer_message";
import {searchTerm, books, userBooks, activeBook, colorValue, userData, BASE_URL, userAssignments} from "./reducers";

export default combineReducers({
  auth,
  message,
  searchTerm, // searchTerm: searchTerm
  books,
  userBooks,
  activeBook,
  colorValue,
  userData,
  BASE_URL,
  userAssignments
});