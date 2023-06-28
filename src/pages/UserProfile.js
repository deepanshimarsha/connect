import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import ModalDetail from "../components/PostDetail/ModalDetail";
import { NavLink } from "react-router-dom";
import "../styles.css/user-profile.css";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile.js/EditProfile";

export default function UserProfile() {
  const { postState, getProfilePost, getBookmarkPosts } = usePostContext();
  const { userState } = useUserContext();
  const [show, setShow] = useState("post");
  const followers = userState.currentUser.followers;
  const following = userState.currentUser.following;

  useEffect(() => {
    getProfilePost();
    getBookmarkPosts();
  }, []);
  if (!postState.profilePosts) {
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
          <SearchPopup />
          <div className="profile" style={{ marginLeft: "120px" }}>
            <div className="profile-picture">
              <span className="user-avatar">
                <img
                  className="user-image"
                  src={userState.currentUser.img}
                  alt="profile-pic"
                />
              </span>
            </div>
            <section className="profile-page-header">
              <div className="section-header">
                <NavLink>
                  <h2>{userState.currentUser.username}</h2>
                </NavLink>
                <EditProfile />
                {/* <div className="edit-btn">
                  <NavLink>Edit Profile</NavLink>
                </div> */}
              </div>
              <div className="space-div">
                <div></div>
              </div>
              <ul className="sub-header">
                <li className="list-item">
                  <span>{postState.profilePosts.length} posts</span>
                </li>
                <li className="list-item">
                  <span>{followers ? followers.length : "0"} followers</span>
                </li>
                <li className="list-item">
                  <span>{following ? following.length : "0"} following</span>
                </li>
              </ul>
              <div className="section-footer">
                <div>
                  <span style={{ fontWeight: "600" }}>
                    {userState.currentUser.firstName}{" "}
                    {userState.currentUser.lastName}
                  </span>
                </div>
              </div>
              <div>
                {" "}
                <span
                  style={{ color: "navy", fontWeight: "400", fontSize: "14px" }}
                >
                  {userState.currentUser.bio}
                </span>
              </div>
              <div className="portfolio">
                <NavLink to={userState.currentUser.portfolio}>
                  {userState.currentUser.portfolio}
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
              <li
                style={{
                  fontWeight: show === "bookmark" ? "600" : "400",
                  color: show === "bookmark" ? "rgb(84 158 246)" : "black",
                }}
                className="padding-right"
                onClick={() => handleClick("bookmark")}
              >
                BOOKMARK
              </li>
            </ul>
          </div>
          {show === "post" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
              }}
            >
              {" "}
              {postState.profilePosts.length === 0 ? (
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  No bookmarks
                </span>
              ) : (
                <div className="thumbnail-collection">
                  {postState.profilePosts.map((post) => {
                    return <ModalDetail {...post} />;
                  })}
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
              }}
            >
              {" "}
              {postState.bookmark.length === 0 ? (
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  No bookmarks
                </span>
              ) : (
                <div className="thumbnail-collection">
                  {postState.bookmark.map((post) => {
                    return <ModalDetail {...post} />;
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
