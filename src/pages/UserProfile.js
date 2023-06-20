import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import ModalDetail from "../components/PostDetail/ModalDetail";
import { NavLink } from "react-router-dom";
import "../styles.css/user-profile.css";

export default function UserProfile() {
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
                  src="https://github.com/mdo.png"
                  alt="profile-pic"
                />
              </span>
            </div>
            <section className="profile-page-header">
              <div className="section-header">
                <NavLink>
                  <h2>deepee_e</h2>
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
                  <span>93 posts</span>
                </li>
                <li className="list-item">
                  <span>362 followers</span>
                </li>
                <li className="list-item">
                  <span>711 following</span>
                </li>
              </ul>
              <div className="section-footer">
                <div>
                  <span style={{ fontWeight: "600" }}>Deepanshi Sharma</span>
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
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
          </div>
        </div>
      </div>
    </div>
  );
}
