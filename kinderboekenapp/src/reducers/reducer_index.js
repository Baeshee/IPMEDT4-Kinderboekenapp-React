import { combineReducers } from "redux";
import auth from "./reducer_auth";
import message from "./reducer_message";

export default combineReducers({
  auth,
  message,
});