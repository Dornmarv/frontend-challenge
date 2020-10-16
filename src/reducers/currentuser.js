import { SWITCH_USER } from "../actions/types";

const initialState = {
  name: "Martin",
  id: 0
};
const currentuser = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_USER:
      return {
        ...state,
        name: action.name,
        id: action.id
      };
    default:
      return state;
  }
};

export default currentuser;
