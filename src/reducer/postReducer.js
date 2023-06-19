export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS": {
      return { ...state, posts: action.posts };
    }
  }
};
