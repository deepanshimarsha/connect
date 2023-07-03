export const searchReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_SEARCH_BAR": {
      return {
        ...state,
        showSearchBar: !state.showSearchBar,
      };
    }
    case "DO_NOT_SHOW_SEARCH_BAR": {
      return {
        ...state,
        showSearchBar: false,
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
