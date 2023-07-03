const navReducer = (state, action) => {
  switch (action.type) {
    case "SET_CLICKED_ICON": {
      if (action.iconClicked === "home") {
        return {
          ...state,
          topNavHeading: "Home",
          home: true,
          search: false,
          create: false,
          explore: false,
          profile: false,
          setting: false,
        };
      }
      if (action.iconClicked === "search") {
        return {
          ...state,
          topNavHeading: "Search",
          home: false,
          search: true,
          create: false,
          explore: false,
          profile: false,
          setting: false,
        };
      }
      if (action.iconClicked === "create") {
        return {
          ...state,

          home: false,
          search: false,
          create: true,
          explore: false,
          profile: false,
          setting: false,
        };
      }
      if (action.iconClicked === "explore") {
        return {
          ...state,
          topNavHeading: "Explore",
          home: false,
          search: false,
          create: false,
          explore: true,
          profile: false,
          setting: false,
        };
      }
      if (action.iconClicked === "profile") {
        return {
          ...state,
          topNavHeading: "Profile",
          home: false,
          search: false,
          create: false,
          explore: false,
          profile: true,
          setting: false,
        };
      }
      if (action.iconClicked === "setting") {
        return {
          ...state,

          home: false,
          search: false,
          create: false,
          explore: false,
          profile: false,
          setting: true,
        };
      }
    }
    // eslint-disable-next-line
    default:
      throw new Error("Unknown action type");
  }
};

export { navReducer };
