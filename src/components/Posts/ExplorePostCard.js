import { NavLink } from "react-router-dom";
import "./explore-post-card.css";
export default function ExplorePostCard() {
  return (
    <div className="explore-post-card">
      <NavLink className="post-detail-link">
        <div className="post-image-container">
          <img
            src="https://pbs.twimg.com/media/Ekzemj2WAAAyDcf.jpg"
            alt="post-cover"
            className="post-cover"
          />
        </div>
      </NavLink>
    </div>
  );
}
