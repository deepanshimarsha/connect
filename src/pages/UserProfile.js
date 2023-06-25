import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import ModalDetail from "../components/PostDetail/ModalDetail";
import { NavLink } from "react-router-dom";
import "../styles.css/user-profile.css";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useEffect } from "react";

export default function UserProfile() {
  const { postState, getProfilePost } = usePostContext();
  const { userState } = useUserContext();
  const followers = userState.currentUser.followers;
  const following = userState.currentUser.following;

  useEffect(() => {
    getProfilePost();
  }, []);
  if (!postState.profilePosts) {
    return <h1>No Posts</h1>;
  }

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
                <div className="edit-btn">
                  <NavLink>Edit Profile</NavLink>
                </div>
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
                  @websitelink/bio
                </span>
              </div>
            </section>
          </div>
          <div className="margin-bottom">
            <hr></hr>
          </div>
          <div className="posts-top-header">
            <ul>
              <li className="padding-left">POSTS</li>
              <li className="padding-right">BOOKMARK</li>
            </ul>
          </div>
          <div className="thumbnail-collection">
            {postState.profilePosts.map((post) => {
              return <ModalDetail {...post} />;
            })}
            {/* <ModalDetail />
            <ModalDetail />
            <ModalDetail /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
