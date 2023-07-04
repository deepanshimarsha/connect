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
    case "CLEAR_USER_FEED": {
      return { ...state, userFeed: [] };
    }
    case "SET_OTHER_USER_PROFILE": {
      return { ...state, otherUserprofile: action.posts };
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
          createPost: { ...state.createPost, image: action.data, comments: [] },
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
    // eslint-disable-next-line
    case "ADD_NEW_POST": {
      return {
        ...state,
        explorePosts: [...state.explorePosts, action.post],
      };
    }
    // eslint-disable-next-line
    case "SHOW_CREATE_MODAL": {
      if (action.mode === "SHOW") {
        return { ...state, showCreateModal: true };
      }
      if (action.mode === "DO_NOT_SHOW") {
        return { ...state, showCreateModal: false };
      }
    }
    // eslint-disable-next-line
    case "ADD_NEW_POST": {
      return {
        ...state,
        newPost: { ...action.post, comments: [] },
      };
    }
    case "SET_IS_LOADING": {
      return {
        ...state,
        isLoading: action.bool,
      };
    }
    // eslint-disable-next-line
    case "SORT_EXPLORE_POSTS": {
      let sortedPosts = state.explorePosts.slice();
      if (action.sort === "latest") {
        sortedPosts = [...sortedPosts].sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
      }
      // eslint-disable-next-line
      if (action.sort === "oldest") {
        sortedPosts = [...sortedPosts].sort(
          (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
        );
      }
      // eslint-disable-next-line
      if (action.sort === "trending") {
        // eslint-disable-next-line
        sortedPosts = [...sortedPosts].sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );
      }
    }
    // eslint-disable-next-line
    case "EDIT_POST": {
      return {
        ...state,
        editPost: { ...state.editPost, caption: action.data },
      };
    }
    case "LIKE_PROFILE_POST": {
      return {
        ...state,
        explorePosts: state.explorePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              likes: { ...post.likes, likeCount: post.likes.likeCount + 1 },
            };
          } else {
            return post;
          }
        }),
        profilePosts: state.profilePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              likes: { ...post.likes, likeCount: post.likes.likeCount + 1 },
            };
          } else {
            return post;
          }
        }),
      };
    }
    case "DISLIKE_PROFILE_POST": {
      return {
        ...state,
        explorePosts: state.explorePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              likes: { ...post.likes, likeCount: post.likes.likeCount - 1 },
            };
          } else {
            return post;
          }
        }),
        profilePosts: state.profilePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              likes: { ...post.likes, likeCount: post.likes.likeCount - 1 },
            };
          } else {
            return post;
          }
        }),
      };
    }

    case "DELETE_POST": {
      return {
        ...state,
        profilePosts: state.profilePosts.filter(
          ({ _id }) => _id !== action._id
        ),
      };
    }
    case "ADD_LIKED_POST": {
      return {
        ...state,
        likedPosts: [...state.likedPosts, action.post],
      };
    }
    case "REMOVE_LIKED_POST": {
      return {
        ...state,
        likedPosts: state.likedPosts.filter(
          (post) => post._id !== action.post._id
        ),
      };
    }
    case "EDIT_PROFILE_POST": {
      return {
        ...state,
        profilePosts: state.profilePosts.map((post) => {
          if (post._id === action.postId) {
            return { ...post, content: action.caption };
          } else {
            return post;
          }
        }),
      };
    }
    case "ADD_COMMENTS": {
      return {
        ...state,
        profilePosts: state.profilePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  username: localStorage.getItem("username"),
                  comment: action.comment,
                },
              ],
            };
          } else {
            return post;
          }
        }),
        explorePosts: state.explorePosts.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  username: localStorage.getItem("username"),
                  comment: action.comment,
                },
              ],
            };
          } else {
            return post;
          }
        }),
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
