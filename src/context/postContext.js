import { useContext, createContext } from "react";

const PostContext = createContext(null);
const PostContextProvider = ({ children }) => {
  const initialPostState = {
    posts: [],
  };

  return <PostContext.Provider>{children}</PostContext.Provider>;
};
