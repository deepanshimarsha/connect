import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import Mockman from "mockman-js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useLocation } from "react-router-dom";
import RequiresAuth from "./components/PrivateRoutesAuth/RequiresAuth";
import PostCard from "./components/Posts/PostCard";

function App() {
  const location = useLocation();
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-card" element={<PostCard />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
