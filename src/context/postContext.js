import { useContext, createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";

const PostContext = createContext(null);
const PostContextProvider = ({ children }) => {
  const initialPostState = {
    posts: [],
  };

  const [postState, postDispatch] = useReducer(postReducer, initialPostState);
  console.log(postState);
  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const jsonData = await response.json();
      postDispatch({ type: "SET_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return <PostContext.Provider>{children}</PostContext.Provider>;
};

const usePostContext = () => usePostContext(PostContext);

export { usePostContext, PostContextProvider };
