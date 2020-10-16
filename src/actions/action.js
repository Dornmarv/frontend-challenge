import {
  ADD_MESSAGE,
  MESSAGE_RECEIVED,
  ADD_USER,
  USERS_LIST,
  SWITCH_USER
} from "./types";
let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => async dispatch => {
  try {
    dispatch({
      type: ADD_MESSAGE,
      id: nextMessageId++,
      message,
      author
    });
  } catch (err) {
    console.log(err);
  }
};

export const addUser = (name, avatar) => async dispatch => {
  try {
    dispatch({
      type: ADD_USER,
      id: nextUserId++,
      name,
      avatar
    });
  } catch (err) {
    console.log(err);
  }
};

export const switchUser = (name, id) => async dispatch => {
  try {
    dispatch({
      type: SWITCH_USER,
      name,
      id
    });
  } catch (err) {
    console.log(err);
  }
};

export const messageReceived = (message, author) => async dispatch => {
  try {
    dispatch({
      type: MESSAGE_RECEIVED,
      id: nextMessageId++,
      message,
      author
    });
  } catch (err) {
    console.log(err);
  }
};

export const populateUsersList = users => async dispatch => {
  try {
    dispatch({
      type: USERS_LIST,
      users
    });
  } catch (err) {
    console.log(err);
  }
};
