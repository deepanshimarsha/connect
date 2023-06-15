const userReducer = (state, action) => {
  switch (action.type) {
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
  }
};

export { userReducer };
