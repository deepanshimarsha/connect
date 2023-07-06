import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import "../styles.css/user-feed.css";
import PostCard from "../components/Posts/PostCard";
import SuggestionCard from "../components/Suggestion.js/SuggestionCard";
import { NavLink } from "react-router-dom";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import { usePostContext } from "../context/postContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import FollowersList from "../components/FollowersList.js/FollowersList";
import { useAuthContext } from "../context/authContext";

export default function UserFeed() {
  const { logoutHandler, authDispatch } = useAuthContext();
  const { postState, getExplorePosts, getProfilePost, postDispatch } =
    usePostContext();
  const [sort, setSort] = useState("latest");

  const { userState, getCurrentUser, getAllUsers } = useUserContext();
  useEffect(() => {
    getCurrentUser();
    getAllUsers();
    getExplorePosts();
    getProfilePost(localStorage.getItem("username"));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (userState.currentUser === undefined) {
    return <p>loading...</p>;
  }

  const getUserFeed = () => {
    let userFeedPosts = [];
    if (postState.explorePosts) {
      userFeedPosts = [
        ...postState.explorePosts.filter(
          (post) => post.username === localStorage.getItem("username")
        ),
        ...postState.explorePosts.filter((post) => {
          if (userState.currentUser.following) {
            return userState.currentUser.following
              .map(({ username }) => username)
              .includes(post.username);
          } else {
            return false;
          }
        }),
      ];
    }
    if (sort === "latest") {
      userFeedPosts = [...userFeedPosts].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
    }
    if (sort === "trending") {
      userFeedPosts = [...userFeedPosts].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    }

    return userFeedPosts;
  };

  let userFeed = getUserFeed();
  console.log("userFeed", userFeed.length);

  const handleClick = (value) => {
    setSort(value);
  };

  return (
    // <div className="main">
    <div>
      <div>
        <Navbar />
      </div>

      <div className="feed-section">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="main">
          {/* <div className="suggestions-mob-view">
            <div className="heading">
              <div className="heading-container">
                <span>Suggested for you</span>
              </div>
              <NavLink className="see-all-link">
                <FollowersList
                  allOtherUsers={userState.allUsers
                    .filter(
                      (user) =>
                        !userState.currentUser.following
                          .map(({ username }) => username)
                          .includes(user.username)
                    )
                    .filter(
                      ({ username }) =>
                        username !== localStorage.getItem("username")
                    )}
                />
              </NavLink>
            </div>
            <div className="suggestions">
              {userState.allUsers
                .filter(
                  (user) =>
                    !userState.currentUser.following
                      .map(({ username }) => username)
                      .includes(user.username)
                )
                .filter(
                  ({ username }) =>
                    username !== localStorage.getItem("username")
                )
                .map((user, idx) => {
                  if (idx <= 1) {
                    return (
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                          padding: "5px",
                          margin: "2px",
                        }}
                      >
                        <SuggestionCard {...user} />
                      </div>
                    );
                  } else {
                    return <div></div>;
                  }
                })}
            </div>
          </div> */}
          <SearchPopup />
          <div className="home-container">
            <div className="user-feed">
              <div className="feed-container">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="sort-container">
                    <div className="sort-user-feed">
                      <span>
                        {sort.slice(0, 1).toUpperCase()}
                        {sort.slice(1)} Posts
                      </span>

                      <div class="menu-nav">
                        <div class="dropdown-container" tabindex="-1">
                          <div class="three-dots"></div>
                          <div class="dropdown2">
                            <div
                              onClick={() => handleClick("latest")}
                              style={{
                                fontWeight: sort === "latest" ? "600" : "400",
                                color:
                                  sort === "latest"
                                    ? "rgb(84 158 246)"
                                    : "black",
                              }}
                            >
                              {" "}
                              Latest Posts
                            </div>

                            <div
                              onClick={() => handleClick("trending")}
                              style={{
                                fontWeight: sort === "trending" ? "600" : "400",
                                color:
                                  sort === "trending"
                                    ? "rgb(84 158 246)"
                                    : "black",
                              }}
                            >
                              Trending Posts
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="userfeed-post-container">
                  {userFeed.length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        height: "30vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <h5>
                        No Posts to Display! Start Following and Liking your
                        Friends Post to get updates on your Feed
                      </h5>
                    </div>
                  ) : (
                    userFeed.map((post) => {
                      return <PostCard {...post} />;
                    })
                  )}
                </div>
              </div>
            </div>
            <div className="suggestion-container">
              <div className="suggestion-main">
                <div className="suggestion-header">
                  {userState.allUsers
                    .filter(
                      ({ username }) =>
                        username === localStorage.getItem("username")
                    )
                    .map((user) => {
                      return <SuggestionCard {...user} />;
                    })}
                  <div className="action-btn">
                    <button
                      type="button"
                      onClick={() => {
                        postDispatch({ type: "CLEAR_USER_FEED" });
                        logoutHandler();
                        authDispatch({
                          type: "SET_LOGIN_CRED",
                          case: "LOGOUT",
                        });
                      }}
                    >
                      <span className="action">Logout</span>
                    </button>
                  </div>
                </div>
                <div className="suggestion-list">
                  <div className="users-list">
                    <div className="heading">
                      <div className="heading-container">
                        <span>Suggested for you</span>
                      </div>
                      <NavLink className="see-all-link">
                        <FollowersList
                          allOtherUsers={userState.allUsers
                            .filter(
                              (user) =>
                                !userState.currentUser.following
                                  .map(({ username }) => username)
                                  .includes(user.username)
                            )
                            .filter(
                              ({ username }) =>
                                username !== localStorage.getItem("username")
                            )}
                        />
                      </NavLink>
                    </div>
                    <div className="list">
                      {userState.allUsers
                        .filter(
                          (user) =>
                            !userState.currentUser.following
                              .map(({ username }) => username)
                              .includes(user.username)
                        )
                        .filter(
                          ({ username }) =>
                            username !== localStorage.getItem("username")
                        )
                        .map((user, idx) => {
                          if (idx <= 2) {
                            return <SuggestionCard {...user} />;
                          } else {
                            return <div></div>;
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
