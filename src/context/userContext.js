import { useContext, createContext, useReducer } from "react";
import { userReducer } from "../reducer/userReducer";

const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const initialUserState = {
    foundUser: {},
    newUser: {},
  };
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
