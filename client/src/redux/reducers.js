const initialState = {
  posts: [],
  error: {},
  loading: true,
  user: {},
};
import { ERROR, GET_ALL_POST, GET_SEARCH, SET_LOADING } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        posts: action.payload,
      };
      case SET_LOADING:
        return {
          loading: action.payload
        };
      case GET_SEARCH:
        return {
          posts: action.payload
        };
    case ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
