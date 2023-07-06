import { NavLink } from "react-router-dom";
import "./suggestion-card.css";
import { useUserContext } from "../../context/userContext";
import { usePostContext } from "../../context/postContext";

export default function SuggestionCard(user) {
  const { getUser } = useUserContext();

  const { followAnotherUser, userState, unfollowAnotherUser } =
    useUserContext();

  const { getProfilePost } = usePostContext();
  const { username, firstName, lastName, img, _id } = user;
  const followingUsername = userState.currentUser.following
    ? userState.currentUser.following.map(({ username }) => username)
    : [];
  const handleFollow = (another_user) => {
    if (followingUsername.includes(username)) {
      unfollowAnotherUser(another_user);
    } else {
      followAnotherUser(another_user);
    }
  };
  return (
    <div className="suggestion-card">
      <div className="suggested-user">
        <div className="profile-img">
          {username === localStorage.getItem("username") ? (
            <NavLink
              onClick={() => {
                getUser(_id);
              }}
              to="/profile"
              className="user-link"
              style={{ height: "44px", width: "44px" }}
            >
              <img src={img} alt="profile" />
            </NavLink>
          ) : (
            <NavLink
              onClick={() => {
                getUser(_id);
                getProfilePost(username);
              }}
              to={`/profile/${username}`}
              className="user-link"
              style={{ height: "44px", width: "44px" }}
            >
              <img src={img} alt="profile" />
            </NavLink>
          )}
        </div>
        <div className="profile-name">
          <div className="profile-content">
            <span className="name" style={{ fontWeight: "500" }}>
              {username}
            </span>
            <span className="username">
              {firstName} {lastName}
            </span>
          </div>
        </div>
        <div className="action-btn">
          {localStorage.getItem("username") !== username && (
            <button type="button" onClick={() => handleFollow(user)}>
              <span className="action">
                {followingUsername.includes(username) ? "Following" : "Follow"}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
