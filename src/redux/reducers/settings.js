import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

export const lang = createSlice({
  name: "UPDATE_LANGUAGE",
  initialState,
  reducers: {
    update: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { update } = lang.actions;
export default lang.reducer;
