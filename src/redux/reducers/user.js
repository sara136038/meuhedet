import { createSlice } from "@reduxjs/toolkit";

import user from "../../models/user";

const userSlice = createSlice({
  name: "user",
  initialState: user(),
  reducers: {
    
    rename:(state, action)=>{
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  },
});

export const { rename } = userSlice.actions;

export default userSlice.reducer;
