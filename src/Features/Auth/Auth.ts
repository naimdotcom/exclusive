import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  value: boolean;
  _id: string;
  name: string;
  email: string;
  password: string;
}

const initialState: AuthState = {
  value: false,
  _id: "",
  name: "",
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.value = true;
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.value = false;
      state._id = "";
      state.name = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
