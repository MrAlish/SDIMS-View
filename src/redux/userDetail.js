import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserDetail } = userSlice.actions;

export default userSlice.reducer;
