import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import Mockman from "mockman-js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
