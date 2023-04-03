import axios from "axios";
import { GET_ALL_POST, ERROR, GET_SEARCH, SET_LOADING } from "./constants";

export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true }); 
      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts`
      );
      dispatch({ type: SET_LOADING, payload: false }); 
      return dispatch({
        type: GET_ALL_POST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: fale }); 
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
      dispatch({ type: SET_LOADING, payload: true }); 

      const search = await axios.get(`https://cambialoapi-production.up.railway.app/posts?search=${data}`)
      dispatch({ type: SET_LOADING, payload: false }); 

      return dispatch({
        type: GET_SEARCH,
        payload: search.data
      })
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: true }); 
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  }
}
