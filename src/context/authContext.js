import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("loginToken");
  const initialAuthState = {
    isLoggedIn: token ? true : false,
    loginCred: { username: "adarshbalika", password: "adarshBalika123" },
    signupCred: {
      email: "adarshbalika@gmail.com",
      name: "adarshbalika",
      username: "adarshbalik",
      password: "adarshBalika123",
    },
    token: token ? token : "",
    loginError: "",
    signupError: "",
    founUser: {},
    newUser: {},
  };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

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

        localStorage.setItem("signupToken", encodedToken);
        authDispatch({ type: "TOGGLE_IS_LOGGED_IN" });
        authDispatch({ type: "SET_TOKEN", token: encodedToken });
        authDispatch({ type: "SET_NEW_USER", newUser: createdUser });
      }
      if (responseData.status === 422) {
        //username already registered
        authDispatch({ type: "SET_SIGNUP_ERROR", error: responseData.error });
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
      //   console.log(requestData);

      const responseData = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(requestData),
      });

      if (responseData.status === 200) {
        const { encodedToken, foundUser } = await responseData.json();

        localStorage.setItem("loginToken", encodedToken);
        authDispatch({ type: "TOGGLE_IS_LOGGED_IN" });
        authDispatch({ type: "SET_TOKEN", token: encodedToken });
        authDispatch({ type: "SET_FOUND_USER", foundUser: foundUser });
      }
      if (responseData.status === 404) {
        //user is not registered
        authDispatch({ type: "SET_LOGIN_ERROR", error: responseData.error });
      }
      if (responseData.status === 401) {
        //wrong password
        authDispatch({ type: "SET_LOGIN_ERROR", error: "wrong password" });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // loginHandler();
    signupHandler();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthContextProvider };
