import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authReducer } from "../reducer/authReducer";
import { useUserContext } from "./userContext";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  // const token = localStorage.getItem("token")
  const signupToken = localStorage.getItem("signupToken");
  const loginToken = localStorage.getItem("token");
  const token = loginToken ? loginToken : signupToken;

  const initialAuthState = {
    isLoggedIn: token ? true : false,
    loginCred: {},
    signupCred: {},
    loginError: "",
    signupError: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const navigate = useNavigate();
  const { getCurrentUser } = useUserContext();

  //signup
  const signupHandler = async () => {
    try {
      localStorage.clear();
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
      // console.log(await responseData.json());
      if (responseData.status === 201) {
        const { encodedToken, createdUser } = await responseData.json();
        // console.log(encodedToken);
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userId", createdUser._id);
        localStorage.setItem("username", createdUser.username);
        localStorage.setItem("mode", "signup");
        authDispatch({ type: "LOGIN" });
        // userDispatch({ type: "SET_NEW_USER", newUser: createdUser });
        authDispatch({
          type: "SET_SIGNUP_ERROR",
          signupError: "",
        });
        getCurrentUser();
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
      localStorage.clear();
      const requestData = {
        username: authState.loginCred.username,
        password: authState.loginCred.password,
      };

      // console.log("body", requestData);

      const responseData = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(requestData),
      });

      if (responseData.status === 200) {
        const { encodedToken, foundUser } = await responseData.json();

        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userId", foundUser._id);
        localStorage.setItem("username", foundUser.username);
        localStorage.setItem("mode", "login");
        authDispatch({ type: "LOGIN" });

        authDispatch({
          type: "SET_LOGIN_ERROR",
          loginError: "",
        });
        getCurrentUser();

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
    authDispatch({ type: "LOGOUT" });
    localStorage.clear();
    //   authDispatch({ type: "SET_TOKEN", token: "" });
  };

  const logoutSignedInUserOnRefresh = () => {
    if (localStorage.getItem("mode") === "signup") {
      localStorage.clear();
      authDispatch({ type: "LOGOUT" });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        logoutSignedInUserOnRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthContextProvider };
