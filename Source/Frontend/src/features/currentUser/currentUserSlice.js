import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = currentUserSlice.actions;

export const selectcurrentUser = (state) => state.currentUser.value;

export default currentUserSlice.reducer;
