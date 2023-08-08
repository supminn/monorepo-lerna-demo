import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    login: JSON.parse(sessionStorage.getItem("user")) || {
      email: "",
      username: "",
    },
    error: "",
    loading: false,
    userDB: [...userData],
  },
  reducers: {
    createNewUser: (state, { payload }) => {
      const newUser = {
        email: payload.email,
        username: payload.name,
        password: payload.password,
      };
      state.userDB.push(newUser);
      const userDetails = {
        email: payload.email,
        username: payload.name,
      };
      state.login = userDetails;
      sessionStorage.setItem("user", JSON.stringify(userDetails));
    },
    loginWithCredentials: (state, { payload }) => {
      const findUser = state.userDB.find(
        (user) => user.email === payload.email
      );
      if (findUser?.password === payload.password) {
        const userDetails = {
          email: payload.email,
          username: findUser.username,
        };
        state.login = userDetails;
        sessionStorage.setItem("user", JSON.stringify(userDetails));
        state.error = "";
      } else {
        state.error = "Email and passwords are not matching. Try again.";
      }
    },
    logoutButtonPressed: (state) => {
      state.login = { email: "", username: "" };
      sessionStorage.clear();
    },
    startLoadingAuth: (state) => {
      state.loading = true;
    },
    clearErrorMessage: (state) => {
      state.error = "";
    },
  },
});

export const {
  createNewUser,
  logoutButtonPressed,
  loginWithCredentials,
  startLoadingAuth,
  clearErrorMessage,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
