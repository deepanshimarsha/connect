import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authReducer } from "../reducer/authReducer";
import { useUserContext } from "./userContext";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  // const token = localStorage.getItem("token");

  const initialAuthState = {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    loginCred: {},
    signupCred: {},
    token: "",
    loginError: "",
    signupError: "",
    foundUser: {},
    newUser: {},
  };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  console.log(authState.isLoggedIn);
  const navigate = useNavigate();
  const { userDispatch } = useUserContext();

  //signup
  const signupHandler = async () => {
    try {
      const requestData = {
        email: authState.signupCred.email,
        name: authState.signupCred.name,
        username: authState.signupCred.username,
        password: authState.signupCred.password,
      };

      const responseData = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(requestData),
      });
      console.log(await responseData.json());
      if (responseData.status === 201) {
        const { encodedToken, createdUser } = await responseData.json();

        localStorage.setItem("token", encodedToken);
        authDispatch({ type: "TOGGLE_IS_LOGGED_IN" });
        authDispatch({ type: "SET_TOKEN", token: encodedToken });
        userDispatch({ type: "SET_NEW_USER", newUser: createdUser });
        authDispatch({
          type: "SET_SIGNUP_ERROR",
          signupError: "",
        });
        navigate("/");
      }
      if (responseData.status === 422) {
        //username already registered
        authDispatch({
          type: "SET_SIGNUP_ERROR",
          signupError: "Username already registered!",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  //login
  const loginHandler = async () => {
    try {
      const requestData = {
        username: authState.loginCred.username,
        password: authState.loginCred.password,
      };

      // console.log("body", requestData);

      const responseData = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(requestData),
      });
      console.log(JSON.stringify(requestData));

      if (responseData.status === 200) {
        const { encodedToken, foundUser } = await responseData.json();

        localStorage.setItem("token", encodedToken);
        authDispatch({ type: "TOGGLE_IS_LOGGED_IN" });
        authDispatch({ type: "SET_TOKEN", token: encodedToken });
        userDispatch({ type: "SET_FOUND_USER", foundUser: foundUser });
        authDispatch({
          type: "SET_LOGIN_ERROR",
          loginError: "",
        });
        navigate("/");
      }
      if (responseData.status === 404) {
        //user is not registered
        authDispatch({
          type: "SET_LOGIN_ERROR",
          loginError: "Username is not registered!",
        });
      }
      if (responseData.status === 401) {
        //wrong password
        authDispatch({
          type: "SET_LOGIN_ERROR",
          loginError:
            "Sorry, your password was incorrect! Please double-check your password.",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const logoutHandler = () => {
    authDispatch({ type: "TOGGLE_IS_LOGGED_IN" });
    authDispatch({ type: "SET_TOKEN", token: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthContextProvider };
