import axios from "axios";
import {
  ERROR_DOCUMENT,
  ERROR_DOCUMENTS,
  ERROR_TOKEN,
  GET_DOCUMENT,
  GET_DOCUMENTS,
  GET_TOKEN,
  SET_TOKEN,
} from "../constants";

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

export const setToken = (token) => ({ type: SET_TOKEN, payload: token });

export const getDocuments =
  ({ token, name = "" }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://sbox-dev.boxcustodia.com/api-test/documents?name=${name}`,
        { headers: { Token: "r2n2naaavgh4i0am98gq9" /* token */ } }
      );

      dispatch({ type: GET_DOCUMENTS, payload: data.body.documents });

      return "success";
    } catch (_) {
      dispatch({ type: ERROR_DOCUMENTS });

      return "error";
    }
  };

export const getDocument =
  ({ token, id }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://sbox-dev.boxcustodia.com/api-test/documents/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch({ type: GET_DOCUMENT, payload: data.body });

      return "success";
    } catch (error) {
      dispatch({ type: ERROR_DOCUMENT });

      return "error";
    }
  };
