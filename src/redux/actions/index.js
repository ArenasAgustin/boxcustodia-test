import axios from "axios";
import {
  ERROR_DOCUMENTS,
  ERROR_TOKEN,
  GET_DOCUMENTS,
  GET_TOKEN,
  SET_TOKEN,
} from "../constants";

/*
 * Fuctions to get the token
 */
export const getToken =
  ({ userName, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://sbox-dev.boxcustodia.com/api-test/login",
        { userName, password }
      );

      dispatch({ type: GET_TOKEN, payload: data.body.token });

      return "success";
    } catch (_) {
      dispatch({ type: ERROR_TOKEN });

      return "error";
    }
  };

/*
 * Fuctions to set the token
 */
export const setToken = (token) => ({ type: SET_TOKEN, payload: token });

/*
 * Fuctions to get the documents
 */
export const getDocuments =
  ({ token, name = "" }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://sbox-dev.boxcustodia.com/api-test/documents?name=${name}`,
        { headers: { Token: token } }
      );

      dispatch({ type: GET_DOCUMENTS, payload: data.body.documents });

      return "success";
    } catch (_) {
      dispatch({ type: ERROR_DOCUMENTS });

      return "error";
    }
  };
