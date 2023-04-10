const initialState = {
  posts: [],
  postUser: [],
  postsFiltrados: [],
  error: {},
  loading: false,
  user: {},
};
import {
  ERROR,
  GET_ALL_POST,
  GET_SEARCH,
  SET_LOADING,
  GET_CATEGORY_FILTER,
  FILTER_BY_VENTAS,
  PRODUCT_USER,
  GET_REVIEWS,
} from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        postsFiltrados: action.payload,
      };
    case GET_CATEGORY_FILTER:
      return {
        ...state,
        postsFiltrados: action.payload,
      };
    case FILTER_BY_VENTAS:
      return {
        ...state,
        postsFiltrados: action.payload,
      };
    case PRODUCT_USER:
      return {
        ...state,
        postUser: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        postsReviews: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
