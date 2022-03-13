import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionType";

const init = { loading: false, songs: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        songs: payload,
        loading: false,
      };

    default:
      return state;
  }
};
