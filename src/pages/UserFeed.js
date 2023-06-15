import Navbar from "../components/Navbar/Navbar";
import "../styles.css/user-feed.css";

export default function UserFeed() {
  return (
    <div className="main">
      <Navbar />
      <div className="home-container">
        <div className="user-feed">
          {/* <div className="stories-container"></div> */}
          <div className="feed-container"></div>
        </div>
        <div className="suggestion-container">
          <div className="suggestion-main">
            <div className="suggestion-header"></div>
            <div className="suggestion-list"></div>
            <div className="suggestion-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
