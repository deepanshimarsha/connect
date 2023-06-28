import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import Mockman from "mockman-js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import RequiresAuth from "./components/PrivateRoutesAuth/RequiresAuth";

import ExloreFeed from "./pages/ExploreFeed";
import Search from "./pages/SearchPage";
import UserProfile from "./pages/UserProfile";
import { useEffect } from "react";
import { useUserContext } from "./context/userContext";
import { useAuthContext } from "./context/authContext";
import { usePostContext } from "./context/postContext";
import EditProfile from "./components/EditProfile.js/EditProfile";
function App() {
  const { getCurrentUser, userState } = useUserContext();
  const { logoutSignedInUserOnRefresh, authState } = useAuthContext();
  const { postState, getExplorePosts } = usePostContext();
  console.log(userState, authState, postState);
  useEffect(() => {
    getCurrentUser();
    logoutSignedInUserOnRefresh();
  }, []);

  return (
    <div className="App">
      {/* <EditProfile /> */}
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <UserFeed />
            </RequiresAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <ExloreFeed />
            </RequiresAuth>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
