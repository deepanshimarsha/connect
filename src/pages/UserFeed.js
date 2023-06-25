import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import "../styles.css/user-feed.css";
import PostCard from "../components/Posts/PostCard";
import SuggestionCard from "../components/Suggestion.js/SuggestionCard";
import { NavLink } from "react-router-dom";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useEffect } from "react";

export default function UserFeed() {
  const { postState } = usePostContext();
  const { userState } = useUserContext();

  const userFeed = postState.explorePosts.filter((post) => {
    if (userState.currentUser.following) {
      return userState.currentUser.following
        .map(({ username }) => username)
        .includes(post.username);
    } else {
      return false;
    }
  });

  return (
    // <div className="main">
    <div>
      <div>
        <Navbar />
      </div>

      <div className="feed-section">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="main">
          <SearchPopup />
          <div className="home-container">
            <div className="user-feed">
              <div className="feed-container">
                {!userFeed.length
                  ? "User feed is empty!"
                  : userFeed.map((post) => {
                      return <PostCard {...post} />;
                    })}
              </div>
            </div>
            <div className="suggestion-container">
              <div className="suggestion-main">
                <div className="suggestion-header">
                  {userState.allUsers
                    .filter(
                      ({ username }) =>
                        username === localStorage.getItem("username")
                    )
                    .map((user) => {
                      return <SuggestionCard {...user} />;
                    })}
                </div>
                <div className="suggestion-list">
                  <div className="users-list">
                    <div className="heading">
                      <div className="heading-container">
                        <span>Suggested for you</span>
                      </div>
                      <NavLink className="see-all-link">
                        <span>See all</span>
                      </NavLink>
                    </div>
                    <div className="list">
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
          </div>
        </div>
      </div>
    </div>
  );
}
