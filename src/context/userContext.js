import { useContext, createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducer/userReducer";

const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const initialUserState = {
    allUsers: [],
    foundUser: {},
    newUser: {},
  };
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
