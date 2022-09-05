import axios from "axios";

import { fetchRequest, fetchSuccess, fetchFailure } from "../reducers/auth";
import { API_URL } from "../../utils/constants";

export const baseURL =
  process.env.NODE_ENV === "development" ? API_URL : API_URL;

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const fetchApi = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get(`${baseURL}/user`, config)
      .then((res) => {
        dispatch(fetchSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
        console.log(error);
      });
  };
};

export const handleSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${baseURL}/user/${id}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const handleDelete = (id) => {
  return function (dispatch) {
    axios
      .delete(`${baseURL}/user/${id}`)
      .then(() => {
        console.log(id);
        dispatch(fetchApi());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
