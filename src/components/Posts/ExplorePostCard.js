import { NavLink } from "react-router-dom";
import "./explore-post-card.css";
export default function ExplorePostCard(post) {
  const { img, vid } = post;

  return (
    <div className="explore-post-card">
      <NavLink className="post-detail-link">
        <div className="post-image-container">
          {img && <img src={img} alt="post-cover" className="post-cover" />}

          {vid && (
            <video
              width="320"
              height="240"
              src={vid}
              controls
              className="video-cover"
            ></video>
          )}
        </div>
      </NavLink>
    </div>
  );
}
