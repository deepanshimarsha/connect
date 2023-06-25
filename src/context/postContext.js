import { useContext, createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";

const PostContext = createContext(null);
const PostContextProvider = ({ children }) => {
  const initialPostState = {
    explorePosts: [],
    profilePosts: [],
    createPost: {
      image: null,
      video: null,
      content: null,
      img: null,
      vid: null,
    },
    newPost: {},
    showCreateModal: false,
  };

  const [postState, postDispatch] = useReducer(postReducer, initialPostState);

  const getExplorePosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const jsonData = await response.json();
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const getProfilePost = async () => {
    try {
      if (localStorage.getItem("mode") === "login") {
        const username = localStorage.getItem("username");
        const response = await fetch(`/api/posts/user/${username}`);
        const jsonData = await response.json();
        postDispatch({ type: "SET_PROFILE_POSTS", posts: jsonData.posts });
      }
      if (localStorage.getItem("mode") === "signup") {
        const username = localStorage.getItem("signedInUsername");
        const response = await fetch(`/api/posts/user/${username}`);
        const jsonData = await response.json();
        postDispatch({ type: "SET_PROFILE_POSTS", posts: jsonData.posts });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const likePost = async (some_post) => {
    try {
      const response = await fetch(`/api/posts/like/${some_post._id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const disLikePost = async (some_post) => {
    try {
      const response = await fetch(`/api/posts/dislike/${some_post._id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const createNewPost = async () => {
    try {
      const post = {
        postData: postState.createPost,
      };
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(post),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
      getProfilePost();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getExplorePosts();
  }, []);
  return (
    <PostContext.Provider
      value={{
        getProfilePost,
        postState,
        likePost,
        disLikePost,
        postDispatch,
        createNewPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostContextProvider };
