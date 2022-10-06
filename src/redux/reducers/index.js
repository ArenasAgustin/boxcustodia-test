import { SET_TOKEN } from "../constants";

const initalState = {
  token: null,
};

export const rootReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};
