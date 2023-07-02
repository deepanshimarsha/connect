import "./search-popup.css";
import SuggestionCard from "../Suggestion.js/SuggestionCard";
import { useSearchContext } from "../../context/searchContext";
import { useUserContext } from "../../context/userContext";
import { useState } from "react";
export default function SearchPopup() {
  const { searchState } = useSearchContext();
  const { userState } = useUserContext();
  const [search, setSearch] = useState("");
  return (
    <div className="search-section">
      <div
        className="search-main"
        style={{ display: searchState.showSearchBar ? "block" : "none" }}
      >
        <div className="search-body">
          <div className="search-title">
            <div className="search-heading">
              <span>Search</span>
            </div>
          </div>
          <div className="search-bar-result">
            <div className="search-bar">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="div-line">
              <br></br>
            </div>
            <div className="search-result">
              <div className="result-container">
                {userState.allUsers
                  .filter(
                    ({ username }) =>
                      username !== localStorage.getItem("username") &&
                      username.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((user) => {
                    return (
                      <div style={{ padding: "12px 0px" }}>
                        <SuggestionCard {...user} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
