const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODE": {
      return {
        ...state,
        mode: action.mode,
      };
    }
    case "TOGGLE_IS_LOGGED_IN": {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    }
    case "LOGIN": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    case "SET_LOGIN_CRED": {
      if (action.case === "LOGOUT") {
        return {
          ...state,
          loginCred: {},
        };
      }
      if (action.method === "GUEST_MODE") {
        return {
          ...state,
          loginCred: {
            username: "adarshbalika",
            password: "adarshBalika123#",
          },
        };
      }
      if (action.field === "USERNAME") {
        return {
          ...state,
          loginCred: {
            ...state.loginCred,
            username: action.data,
          },
        };
      }
      if (action.field === "PASSWORD") {
        return {
          ...state,
          loginCred: { ...state.loginCred, password: action.data },
        };
      }
    }
    case "SET_SIGNUP_CRED": {
      if (action.field === "EMAIL") {
        return {
          ...state,
          signupCred: { ...state.signupCred, email: action.data },
        };
      }
      if (action.field === "FULL_NAME") {
        return {
          ...state,
          signupCred: { ...state.signupCred, fullName: action.data },
        };
      }

      if (action.field === "USERNAME") {
        return {
          ...state,
          signupCred: { ...state.signupCred, username: action.data },
        };
      }

      if (action.field === "PASSWORD") {
        return {
          ...state,
          signupCred: { ...state.signupCred, password: action.data },
        };
      }
    }

    case "SET_TOKEN": {
      return { ...state, token: action.token };
    }
    case "SET_LOGIN_ERROR": {
      return { ...state, loginError: action.loginError };
    }
    case "SET_SIGNUP_ERROR": {
      return { ...state, signupError: action.signupError };
    }
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.value };
    }
  }
};

export { authReducer };
