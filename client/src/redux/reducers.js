const initialState = {
  posts: [],
  error: {},
  user: {},
};
import { ERROR, GET_ALL_POST } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        posts: action.payload,
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
