import { useContext, createContext, useReducer } from "react";
import { searchReducer } from "../reducer/searchReducer";

const SearchContext = createContext(null);
const SearchContextProvider = ({ children }) => {
  const searchInitialState = {
    showSearchBar: false,
  };

  const [searchState, searchDispatch] = useReducer(
    searchReducer,
    searchInitialState
  );

  return (
    <SearchContext.Provider value={{ searchState, searchDispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => useContext(SearchContext);
export { useSearchContext, SearchContextProvider };
