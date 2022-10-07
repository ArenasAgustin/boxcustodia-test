import {
  ERROR_DOCUMENT,
  ERROR_DOCUMENTS,
  ERROR_TOKEN,
  GET_DOCUMENT,
  GET_DOCUMENTS,
  GET_TOKEN,
  SET_TOKEN,
} from "../constants";

const initalState = {
  token: '',
  errorToken: null,
  documents: [],
  errorDocuments: null,
  document: [],
  errorDocument: null,
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

    case GET_DOCUMENTS:
      return {
        ...state,
        documents: payload,
        errorDocuments: false,
      };

    case ERROR_DOCUMENTS:
      return {
        ...state,
        documents: [],
        errorDocuments: true,
      };

    case GET_DOCUMENT:
      return {
        ...state,
        document: payload,
        errorDocument: false,
      };

    case ERROR_DOCUMENT:
      return {
        ...state,
        document: {},
        errorDocument: true,
      };

    default:
      return state;
  }
};
