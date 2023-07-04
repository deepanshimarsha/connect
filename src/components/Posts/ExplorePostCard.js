import { NavLink } from "react-router-dom";
import "./explore-post-card.css";
export default function ExplorePostCard(post) {
  const { img, vid } = post;

  return (
    <div className="explore-post-card">
      <NavLink className="post-detail-link">
        <div className="post-image-container">
          {img && (
            <img
              src={img}
              alt="post-cover"
              className="post-cover post-images"
            />
          )}

          {vid && (
            <video
              src={vid}
              controls
              className="video-cover post-images"
            ></video>
          )}
        </div>
      </NavLink>
    </div>
  );
}
