import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import "../styles.css/user-feed.css";

export default function UserFeed() {
  return (
    // <div className="main">
    <div>
      <Navbar />
      <div>
        <TopNav />
      </div>

      {/* <div className="home-container">
        <div className="user-feed">
          {/* <div className="stories-container"></div> */}
      {/* <div className="feed-container"></div>
        </div>
        <div className="suggestion-container">
          <div className="suggestion-main">
            <div className="suggestion-header"></div>
            <div className="suggestion-list"></div>
            <div className="suggestion-footer"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
