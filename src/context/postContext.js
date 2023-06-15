import { useContext, createContext } from "react";

const PostContext = createContext(null);
const PostContextProvider = ({ children }) => {
  const initialPostState = {};
  return <PostContext.Provider>{children}</PostContext.Provider>;
};
