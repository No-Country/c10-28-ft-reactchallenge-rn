import axios from "axios";
import { GET_ALL_POST, ERROR } from "./constants";

export const getPost = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts`
      );
      return dispatch({
        type: GET_ALL_POST,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
