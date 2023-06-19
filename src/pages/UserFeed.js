import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import "../styles.css/user-feed.css";
import PostCard from "../components/Posts/PostCard";
import SuggestionCard from "../components/Suggestion.js/SuggestionCard";
import { NavLink } from "react-router-dom";

export default function UserFeed() {
  return (
    // <div className="main">
    <div>
      <Navbar />
      <div className="feed-section">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="main">
          <div className="home-container">
            <div className="user-feed">
              {/* <div className="stories-container"></div> */}
              <div className="feed-container">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
              </div>
            </div>
            <div className="suggestion-container">
              <div className="suggestion-main">
                <div className="suggestion-header">
                  <SuggestionCard />
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
                      <SuggestionCard />
                      <SuggestionCard />
                      <SuggestionCard />
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
