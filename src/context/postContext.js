import { useContext, createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";
import { useUserContext } from "./userContext";

const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
  const initialPostState = {
    explorePosts: [],
    profilePosts: [],
    userFeed: [],
    bookmark: [],
    otherUserprofile: [],
    createPost: {
      image: null,
      video: null,
      content: null,
      img: null,
      vid: null,
    },
    editPost: { caption: "" },
    newPost: {},
    showCreateModal: false,
    sort: "",
    comments: [],
    isLoading: false,
    likedPosts: [],
  };

  const [postState, postDispatch] = useReducer(postReducer, initialPostState);

  const { userState } = useUserContext();

  const getUserFeed = () => {
    const userFeed = [
      ...postState.explorePosts.filter(
        (post) => post.username === localStorage.getItem("username")
      ),
      ...postState.explorePosts.filter((post) => {
        if (userState.currentUser.following) {
          return userState.currentUser.following
            .map(({ username }) => username)
            .includes(post.username);
        } else {
          return false;
        }
      }),
    ];

    postDispatch({ type: "SET_USER_FEED", data: userFeed });
  };

  const getExplorePosts = async () => {
    postDispatch({ type: "SET_IS_LOADING", bool: true });
    try {
      const response = await fetch("/api/posts");
      const jsonData = await response.json();
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    } finally {
      postDispatch({ type: "SET_IS_LOADING", bool: false });
    }
  };

  const getProfilePost = async (username) => {
    try {
      postDispatch({ type: "SET_IS_LOADING", bool: true });
      const response = await fetch(`/api/posts/user/${username}`);
      const jsonData = await response.json();

      if (username === localStorage.getItem("username")) {
        postDispatch({ type: "SET_PROFILE_POSTS", posts: jsonData.posts });
      } else {
        postDispatch({ type: "SET_OTHER_USER_PROFILE", posts: jsonData.posts });
      }
    } catch (e) {
      console.error(e);
    } finally {
      postDispatch({ type: "SET_IS_LOADING", bool: false });
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
      postDispatch({ type: "LIKE_PROFILE_POST", postId: some_post._id });
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
      postDispatch({ type: "DISLIKE_PROFILE_POST", postId: some_post._id });
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
      postDispatch({ type: "ADD_NEW_POST", post: postState.createPost });
      getProfilePost(localStorage.getItem("username"));
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
      getExplorePosts();
    } catch (e) {
      console.error(e);
    }
  };

  const getBookmarkPosts = async () => {
    try {
      const response = await fetch("/api/users/bookmark", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      const bookmarkPostIds = jsonData.bookmarks.map(({ _id }) => _id);
      const bookmarkPosts = postState.explorePosts.filter(({ _id }) =>
        bookmarkPostIds.includes(_id)
      );
      postDispatch({ type: "SET_BOOKMARK", data: bookmarkPosts });
    } catch (e) {
      console.error(e);
    }
  };

  const addToBookmark = async (postId) => {
    try {
      const response = await fetch(`/api/users/bookmark/${postId}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      const bookmarkPostIds = jsonData.bookmarks.map(({ _id }) => _id);
      const bookmarkPosts = postState.explorePosts.filter(({ _id }) =>
        bookmarkPostIds.includes(_id)
      );

      postDispatch({ type: "SET_BOOKMARK", data: bookmarkPosts });
    } catch (e) {
      console.error(e);
    }
  };

  const removeBookmark = async (postId) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${postId}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      const bookmarkPostIds = jsonData.bookmarks.map(({ _id }) => _id);
      const bookmarkPosts = postState.explorePosts.filter(({ _id }) =>
        bookmarkPostIds.includes(_id)
      );

      postDispatch({ type: "SET_BOOKMARK", data: bookmarkPosts });
    } catch (e) {
      console.error(e);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const jsonData = await response.json();
      postDispatch({ type: "DELETE_POST", _id: postId });
      postDispatch({ type: "SET_EXPLORE_POSTS", posts: jsonData.posts });
    } catch (e) {
      console.error(e);
    }
  };

  const editPost = async (postId) => {
    try {
      const caption = postState.editPost.caption;
      const post = postState.explorePosts.find((post) => post._id === postId);
      const editedPost = { postData: { ...post, content: caption } };
      console.log("editedpost", editedPost);
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(editedPost),
      });

      const jsonData = await response.json();
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
        getUserFeed,
        getExplorePosts,
        getBookmarkPosts,
        addToBookmark,
        removeBookmark,
        deletePost,
        editPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostContextProvider };
