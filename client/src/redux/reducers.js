const initialState = {
  posts: [],
  error: {},
  user: {},
};
import { ERROR, GET_ALL_POST, GET_SEARCH } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        posts: action.payload,
      };
      case GET_SEARCH:
        return {
          posts: action.payload
        }
    case ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
