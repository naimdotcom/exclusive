import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  value: boolean;
  _id: string;
  firstName: string;
  email: string;
  password: string;
  isVerified: boolean;
}

const initialState: AuthState = {
  value: false,
  _id: "",
  firstName: "",
  email: "",
  password: "",
  isVerified: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.value = true;
      state._id = action.payload._id;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isVerified = action.payload.isVerified;
    },
    logout: (state) => {
      state.value = false;
      state._id = "";
      state.firstName = "";
      state.email = "";
      state.password = "";
      state.isVerified = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
