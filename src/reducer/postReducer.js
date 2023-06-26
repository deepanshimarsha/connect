export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPLORE_POSTS": {
      return { ...state, explorePosts: action.posts };
    }
    case "SET_PROFILE_POSTS": {
      return { ...state, profilePosts: action.posts };
    }

    case "SET_USER_FEED": {
      return { ...state, userFeed: action.data };
    }

    case "SET_BOOKMARK": {
      return {
        ...state,
        bookmark: action.data,
      };
    }
    case "CREATE_POST": {
      if (action.field === "IMAGE") {
        return {
          ...state,
          createPost: { ...state.createPost, image: action.data },
        };
      }
      if (action.field === "VIDEO") {
        return {
          ...state,
          createPost: { ...state.createPost, video: action.data },
        };
      }
      if (action.field === "CONTENT") {
        return {
          ...state,
          createPost: { ...state.createPost, content: action.data },
        };
      }
      if (action.mode === "CLEAR_DATA") {
        return {
          ...state,
          createPost: { image: null, video: null, content: null },
        };
      }
      if (action.field === "IMAGE_URL") {
        return {
          ...state,
          createPost: { ...state.createPost, img: action.data },
        };
      }
      if (action.field === "VIDEO_URL") {
        return {
          ...state,
          createPost: { ...state.createPost, vid: action.data },
        };
      }
    }
    case "SHOW_CREATE_MODAL": {
      if (action.mode === "SHOW") {
        return { ...state, showCreateModal: true };
      }
      if (action.mode === "DO_NOT_SHOW") {
        return { ...state, showCreateModal: false };
      }
    }
    case "ADD_NEW_POST": {
      return {
        ...state,
        newPost: action.post,
      };
    }

    // case "SET_SORT": {
    //   return { ...state, sort: action.value };
    // }
    case "SORT_EXPLORE_POSTS": {
      let sortedPosts = state.explorePosts.slice();
      if (action.sort === "latest") {
        sortedPosts = [...sortedPosts].sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
      }
      if (action.sort === "oldest") {
        sortedPosts = [...sortedPosts].sort(
          (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
        );
      }
      if (action.sort === "trending") {
        sortedPosts = [...sortedPosts].sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );
      }
    }
  }
};
