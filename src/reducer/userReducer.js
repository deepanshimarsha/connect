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

    case "SET_USER": {
      return {
        ...state,
        user: action.user,
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

    case "SET_EDITED_PROFILE_INPUT": {
      if (action.field === "BIO") {
        return {
          ...state,
          currentUser: { ...state.currentUser, bio: action.data },
        };
      }
      if (action.field === "PORTFOLIO") {
        return {
          ...state,
          currentUser: { ...state.currentUser, portfolio: action.data },
        };
      }
      if (action.field === "IMG") {
        return {
          ...state,
          currentUser: { ...state.currentUser, img: action.data },
        };
      }
    }
    // eslint-disable-next-line
    default:
      throw new Error("Unknown action type");
  }
};

export { userReducer };
