import { useContext, createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducer/userReducer";
const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const initialUserState = {
    allUsers: [],
    currentUser: {},
    user: {},
  };
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const jsonData = await response.json();
      userDispatch({ type: "SET_ALL_USERS", users: jsonData.users });
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`/api/users/${userId}`);
      const jsonData = await response.json();

      if (response.status === 200) {
        userDispatch({ type: "SET_CURRENT_USER", user: jsonData.user });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const followAnotherUser = async (another_user) => {
    try {
      const response = await fetch(`/api/users/follow/${another_user._id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      if (response.status === 200) {
        const { user } = jsonData;
        userDispatch({ type: "SET_CURRENT_USER", user: user });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const unfollowAnotherUser = async (another_user) => {
    try {
      const response = await fetch(`/api/users/unfollow/${another_user._id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();

      if (response.status === 200) {
        const { user } = jsonData;
        userDispatch({ type: "SET_CURRENT_USER", user: user });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateUser = async () => {
    try {
      const requestData = {
        userData: userState.currentUser,
      };
      const response = await fetch("/api/users/edit", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(requestData),
      });
      const jsonData = await response.json();
      userDispatch({ type: "SET_CURRENT_USER", user: jsonData.user });
    } catch (e) {
      console.error(e);
    }
  };

  const getUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const jsonData = await response.json();

      userDispatch({ type: "SET_USER", user: jsonData.user });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAllUsers();
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        getCurrentUser,
        getAllUsers,
        followAnotherUser,
        unfollowAnotherUser,
        updateUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
