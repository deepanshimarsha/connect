const authReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_IS_LOGGED_IN": {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    }

    case "SET_LOGIN_CRED": {
      return {
        ...state,
        loginCred: { username: action.username, password: action.password },
      };
    }
    case "SET_SIGNUP_CRED": {
      return {
        ...state,
        signupCred: {
          email: action.email,
          name: action.name,
          username: action.username,
          password: action.password,
        },
      };
    }

    case "SET_FOUND_USER": {
      return {
        ...state,
        foundUser: action.foundUser,
      };
    }
    case "SET_NEW_USER": {
      return {
        ...state,
        newUser: action.newUser,
      };
    }
    case "SET_TOKEN": {
      return { ...state, token: action.token };
    }
    case "SET_LOGIN_ERROR": {
      return { ...state, loginError: action.error };
    }
    case "SET_SIGNUP_ERROR": {
      return { ...state, signupError: action.signupError };
    }
  }
};

export { authReducer };
