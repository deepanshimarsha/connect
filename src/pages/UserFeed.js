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

export default function UserFeed() {
  const { postState, getUserFeed, postDispatch } = usePostContext();
  const [sort, setSort] = useState("latest");
  const { userState } = useUserContext();
  let userFeed = [
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

  if (sort === "latest") {
    userFeed = [...userFeed].sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  }
  if (sort === "trending") {
    userFeed = [...userFeed].sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
  }
  if (sort === "oldest") {
    userFeed = [...userFeed].sort(
      (a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt)
    );
  }

  const handleClick = (value) => {
    setSort(value);
  };

  // useEffect(() => {
  //   postDispatch({ type: "SORT_EXPLORE_POSTS" });
  // }, [postState.sort]);

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
                              onClick={() => handleClick("oldest")}
                              style={{
                                fontWeight: sort === "oldest" ? "600" : "400",
                                color:
                                  sort === "oldest"
                                    ? "rgb(84 158 246)"
                                    : "black",
                              }}
                            >
                              Oldest Posts
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
                {!userFeed.length ? (
                  <div style={{ textAlign: "center" }}>
                    <h5>
                      {/* No Posts to Display! Start Following and Liking your
                      Friends Post to get updates on your Feed */}
                    </h5>
                  </div>
                ) : (
                  userFeed.map((post) => {
                    return <PostCard {...post} />;
                  })
                )}
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
                </div>
                <div className="suggestion-list">
                  <div className="users-list">
                    <div className="heading">
                      <div className="heading-container">
                        <span>Suggested for you</span>
                      </div>
                      <NavLink className="see-all-link">
                        <span>See all</span>
                      </NavLink>
                    </div>
                    <div className="list">
                      {userState.allUsers
                        .filter(
                          ({ username }) =>
                            username !== localStorage.getItem("username")
                        )
                        .map((user) => {
                          return <SuggestionCard {...user} />;
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
