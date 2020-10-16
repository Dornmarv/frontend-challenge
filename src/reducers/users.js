import { ADD_USER, USERS_LIST } from "../actions/types";

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat([
        { name: action.name, id: action.id, avatar: action.avatar }
      ]);
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
