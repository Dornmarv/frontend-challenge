import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import currentuser from "./currentuser";

export default combineReducers({
  messages,
  users,
  currentuser
});
