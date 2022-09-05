import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure, logout } =
  auth.actions;
export default auth.reducer;
