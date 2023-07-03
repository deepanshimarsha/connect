import { useContext, createContext, useReducer } from "react";
import { navReducer } from "../reducer/navReducer";

const NavContext = createContext(null);
const NavContextProvider = ({ children }) => {
  const navInitialState = {
    topNavHeading: "Home",
    home: true,
    search: false,
    create: false,
    explore: false,
    profile: false,
    setting: false,
  };

  const [navState, navDispatch] = useReducer(navReducer, navInitialState);

  const setClickedIconAndHeading = (iconName) => {
    navDispatch({ type: "SET_CLICKED_ICON", iconClicked: iconName });
  };

  return (
    <NavContext.Provider value={{ navState, setClickedIconAndHeading }}>
      {children}
    </NavContext.Provider>
  );
};

const useNavContext = () => useContext(NavContext);
export { useNavContext, NavContextProvider };
