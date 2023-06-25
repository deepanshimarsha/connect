import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./context/authContext";
import { UserContextProvider } from "./context/userContext";
import { NavContextProvider } from "./context/navContext";
import { PostContextProvider } from "./context/postContext";
import { SearchContextProvider } from "./context/searchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <NavContextProvider>
              <SearchContextProvider>
                {" "}
                <App />
              </SearchContextProvider>
            </NavContextProvider>
          </PostContextProvider>
        </AuthContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
makeServer();
