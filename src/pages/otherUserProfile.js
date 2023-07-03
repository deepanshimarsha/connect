import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import ModalDetail from "../components/PostDetail/ModalDetail";
import { NavLink, useParams } from "react-router-dom";
import "../styles.css/user-profile.css";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import FollowersList from "../components/FollowersList.js/FollowersList";
import EditProfile from "../components/EditProfile.js/EditProfile";

export default function OtherUserProfile() {
  const { postState, getProfilePost } = usePostContext();
  const { followAnotherUser, userState, unfollowAnotherUser } =
    useUserContext();
  const [show, setShow] = useState("post");
  const { username } = useParams();
  const followers = userState.user.followers;
  const following = userState.user.following;
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
  useEffect(() => {
    getProfilePost(username);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!postState.otherUserprofile) {
    return <h1>No Posts</h1>;
  }

  const handleClick = (value) => {
    setShow(value);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="explore-main">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="explore-content margin-top">
          <div className="profile2">
            <div className="profile2-header">
              <div className="profile-picture">
                <span className="user-avatar">
                  <img
                    className="user-image"
                    src={userState.user.img}
                    alt="profile-pic"
                  />
                </span>
              </div>
              <div className="profile-desc">
                <div style={{ display: "flex" }}>
                  <NavLink>
                    <h2>{userState.user.username}</h2>
                  </NavLink>
                  <div className="action-btn">
                    {localStorage.getItem("username") !== username && (
                      <button
                        type="button"
                        onClick={() => handleFollow(userState.user)}
                      >
                        <span className="action">
                          {followingUsername.includes(username)
                            ? "Following"
                            : "Follow"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                <EditProfile />
              </div>
            </div>
            <div className="profile2-footer">
              <div className="section-footer">
                <div>
                  <span style={{ fontWeight: "600" }}>
                    {userState.user.firstName} {userState.user.lastName}
                  </span>
                </div>

                <div>
                  {" "}
                  <span
                    style={{
                      color: "navy",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    {userState.user.bio}
                  </span>
                </div>
                <div className="portfolio">
                  <NavLink to={userState.user.portfolio}>
                    {userState.user.portfolio}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="profile-followers">
              <ul className="sub-header">
                <li className="list-item">
                  <span>{postState.profilePosts.length} posts</span>
                </li>
                <li className="list-item">
                  <FollowersList followers={followers} />
                </li>
                <li className="list-item">
                  <FollowersList following={following} />
                </li>
              </ul>
            </div>
          </div>
          <div className="profile" style={{ marginLeft: "120px" }}>
            <div className="profile-picture">
              <span className="user-avatar">
                <img
                  className="user-image"
                  src={userState.user.img}
                  alt="profile-pic"
                />
              </span>
            </div>
            <section className="profile-page-header">
              <div className="section-header">
                <NavLink>
                  <h2>{userState.user.username}</h2>
                </NavLink>
                <div className="action-btn">
                  {localStorage.getItem("username") !== username && (
                    <button
                      type="button"
                      onClick={() => handleFollow(userState.user)}
                    >
                      <span className="action">
                        {followingUsername.includes(username)
                          ? "Following"
                          : "Follow"}
                      </span>
                    </button>
                  )}
                </div>
              </div>
              <div className="space-div">
                <div></div>
              </div>
              <ul className="sub-header">
                <li className="list-item">
                  <span>{postState.otherUserprofile.length} posts</span>
                </li>
                <li className="list-item">
                  <FollowersList followers={followers} />
                </li>
                <li className="list-item">
                  <FollowersList following={following} />
                </li>
              </ul>
              <div className="section-footer">
                <div>
                  <span style={{ fontWeight: "600" }}>
                    {userState.user.firstName} {userState.user.lastName}
                  </span>
                </div>
              </div>
              <div>
                {" "}
                <span
                  style={{ color: "navy", fontWeight: "400", fontSize: "14px" }}
                >
                  {userState.user.bio}
                </span>
              </div>
              <div className="portfolio">
                <NavLink to={userState.user.portfolio}>
                  {userState.user.portfolio}
                </NavLink>
              </div>
            </section>
          </div>
          <div className="margin-bottom">
            <hr></hr>
          </div>
          <div className="posts-top-header">
            <ul>
              <li
                className="padding-left"
                style={{
                  fontWeight: show === "post" ? "600" : "400",
                  color: show === "post" ? "rgb(84 158 246)" : "black",
                }}
                onClick={() => handleClick("post")}
              >
                POSTS
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            {" "}
            {postState.otherUserprofile.length === 0 ? (
              <span style={{ fontWeight: "500", fontSize: "18px" }}>
                No Posts
              </span>
            ) : (
              <div className="thumbnail-collection">
                {postState.otherUserprofile.map((post) => {
                  return <ModalDetail {...post} />;
                })}
              </div>
            )}
          </div>
        </div>
        <SearchPopup />
      </div>
    </div>
  );
}
