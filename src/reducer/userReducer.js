const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW_USER": {
      return {
        ...state,
        newUser: action.newUser,
      };
    }
    case "SET_ALL_USERS": {
      return {
        ...state,
        allUsers: action.users,
      };
    }
    case "SET_CURRENT_USER": {
      return {
        ...state,
        currentUser: action.user,
      };
    }
    case "SET_USER_FOLLOWING": {
      return {
        ...state,
        userFollowing: action.data,
      };
    }
    case "SET_USER_FOLLOWER": {
      return {
        ...state,
        userFollower: action.data,
      };
    }
  }
};

export { userReducer };
