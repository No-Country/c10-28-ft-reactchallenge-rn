import axios from "axios";
import { GET_ALL_POST, ERROR, GET_SEARCH } from "./constants";

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

export const searchBar = (data) => {
  return async (dispatch) => {
    try {
      const search = await axios.get(`https://cambialoapi-production.up.railway.app/posts?search=${data}`)
      return dispatch({
        type: GET_SEARCH,
        payload: search.data
      })
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  }
}
