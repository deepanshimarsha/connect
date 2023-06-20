import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import Mockman from "mockman-js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import RequiresAuth from "./components/PrivateRoutesAuth/RequiresAuth";
import PostCard from "./components/Posts/PostCard";
import { useNavContext } from "./context/navContext";
import ExloreFeed from "./pages/ExploreFeed";
import Search from "./pages/SearchPage";
import UserProfile from "./pages/UserProfile";
import ModalDetail from "./components/PostDetail/ModalDetail";
import CreateModalForm from "./components/CreateModalForm.js/CreateModalForm";
import SearchPopup from "./components/SearchPopup/SearchPopup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <UserFeed />
            </RequiresAuth>
          }
        />
        <Route path="/explore" element={<ExloreFeed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-card" element={<PostCard />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
