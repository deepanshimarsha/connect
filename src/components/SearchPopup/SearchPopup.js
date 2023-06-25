import { useState } from "react";
import "./search-popup.css";
import SuggestionCard from "../Suggestion.js/SuggestionCard";
import { useSearchContext } from "../../context/searchContext";
import { useUserContext } from "../../context/userContext";
export default function SearchPopup() {
  const { searchState } = useSearchContext();
  const { userState } = useUserContext();
  return (
    <>
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
                      username !== localStorage.getItem("username")
                  )
                  .map((user) => {
                    return <SuggestionCard {...user} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
