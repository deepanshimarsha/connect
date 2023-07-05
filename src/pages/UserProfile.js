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
import FollowersList from "../components/FollowersList.js/FollowersList";

export default function UserProfile() {
  const {
    postState,
    getProfilePost,
    getBookmarkPosts,
    getExplorePosts,
    postDispatch,
  } = usePostContext();
  const { userState } = useUserContext();
  const [show, setShow] = useState("post");
  const followers = userState.currentUser.followers;
  const following = userState.currentUser.following;

  const profilePostsManual = () => {
    const userPost = postState.explorePosts.filter(
      ({ username }) => username === localStorage.getItem("username")
    );
    postDispatch({ type: "SET_PROFILE_POSTS", posts: userPost });
  };

  useEffect(() => {
    profilePostsManual();
    getBookmarkPosts();
    getExplorePosts();
    getProfilePost(localStorage.getItem("username"));

    // getProfilePost();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
          <div className="profile2">
            <div className="profile2-header">
              <div className="profile-picture">
                <span className="user-avatar">
                  <img
                    className="user-image"
                    src={userState.currentUser.img}
                    alt="profile-pic"
                  />
                </span>
              </div>
              <div className="profile-desc">
                <NavLink>
                  <h2>{userState.currentUser.username}</h2>
                </NavLink>
                <EditProfile />
              </div>
            </div>
            <div className="profile2-footer">
              <div className="section-footer">
                <div>
                  <span style={{ fontWeight: "600" }}>
                    {userState.currentUser.firstName}{" "}
                    {userState.currentUser.lastName}
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
                    {userState.currentUser.bio}
                  </span>
                </div>
                <div className="portfolio">
                  <NavLink to={userState.currentUser.portfolio}>
                    {userState.currentUser.portfolio}
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
                <li className="list-item following-div">
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
              </div>
              <div className="space-div">
                <div></div>
              </div>
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
          {postState.isLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
              }}
            >
              Loading...
            </div>
          )}
          {!postState.isLoading && (
            <div>
              {show === "post" ? (
                <div
                  className="userprofile-posts-container"
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
                      No Posts
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
                  className="userprofile-posts-container"
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
          )}
        </div>
        <SearchPopup />
      </div>
    </div>
  );
}
