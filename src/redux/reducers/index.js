import { ERROR_TOKEN, GET_TOKEN, SET_TOKEN } from "../constants";

const initalState = {
  token: null,
  errorToken: null,
};

export const rootReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
        errorToken: false,
      };

    case GET_TOKEN:
      return {
        ...state,
        token: payload,
        errorToken: false,
      };

    case ERROR_TOKEN:
      return {
        ...state,
        token: "",
        errorToken: true,
      };

    default:
      return state;
  }
};
