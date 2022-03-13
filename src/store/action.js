import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionType";

export const getDataLoading = () => {
  return {
    type: GET_DATA_LOADING,
  };
};

export const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
};

export const getDataError = (data) => {
  return {
    type: GET_DATA_ERROR,
    payload: data,
  };
};
