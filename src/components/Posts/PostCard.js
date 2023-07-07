import "./post-card.css";
import { useUserContext } from "../../context/userContext";
import { usePostContext } from "../../context/postContext";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PostCard(post) {
  const { img, content, likes, username, _id, comments, vid } = post;
  const [edit, setEdit] = useState(false);
  const [viewAllComments, showAllComments] = useState(false);

  const [commentInput, setCommentInput] = useState("");
  const { getUser } = useUserContext();

  // const [commentList, setCommentList] = useState(comments);
  let location = useLocation();
  console.log("location", location.pathname);

  const {
    likePost,
    disLikePost,
    addToBookmark,
    postState,
    removeBookmark,
    deletePost,
    postDispatch,
    editPost,
  } = usePostContext();

  const { followAnotherUser, userState, unfollowAnotherUser } =
    useUserContext();
  const followingUsername = userState.currentUser.following
    ? userState.currentUser.following.map(({ username }) => username)
    : [];
  const [showLike, setShowLike] = useState(false);

  const postAuthor = userState.allUsers.find(
    (user) => user.username === username
  );

  const handlePostLike = () => {
    if (postState.likedPosts.map(({ _id }) => _id).includes(post._id)) {
      postDispatch({ type: "REMOVE_LIKED_POST", post: post });
      disLikePost(post);
    } else {
      postDispatch({ type: "ADD_LIKED_POST", post: post });
      likePost(post);
    }
    setShowLike(!showLike);
  };

  const handleBookmark = () => {
    const isBookmark = postState.bookmark.map(({ _id }) => _id).includes(_id);
    if (isBookmark) {
      removeBookmark(_id);
    } else {
      addToBookmark(_id);
    }
  };

  const handleDelete = () => {
    deletePost(_id);
  };
  const handleClick = () => {
    postDispatch({ type: "EDIT_POST", data: content });
    setEdit(true);
  };
  const handleEditPost = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editPost(_id);
      postDispatch({ type: "EDIT_POST", data: "" });
      setEdit(false);
    }
  };
  const handleEditBtnSend = () => {
    postDispatch({
      type: "EDIT_PROFILE_POST",
      postId: _id,
      caption: postState.editPost.caption,
    });
    editPost(_id);
    postDispatch({ type: "EDIT_POST", data: "" });
    setEdit(false);
  };

  // const handleRemoveEditPost = () => {
  //   if (scrollTop % 400 === 0 && scrollTop !== 0) {
  //     setEdit(false);
  //   }
  // };

  const handleFollow = (another_user) => {
    if (followingUsername.includes(username)) {
      unfollowAnotherUser(another_user);
    } else {
      followAnotherUser(another_user);
    }
  };
  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };
  const handleAddComment = (e) => {
    if (e.key === "Enter" && commentInput) {
      showAllComments(true);
      postDispatch({
        type: "ADD_COMMENTS",
        postId: _id,
        comment: e.target.value,
      });

      setCommentInput("");
    }
  };

  const handleCommentButton = () => {
    if (commentInput) {
      showAllComments(true);
      postDispatch({
        type: "ADD_COMMENTS",
        postId: _id,
        comment: commentInput,
      });

      setCommentInput("");
    }
  };

  // useEffect(() => {
  //   handleRemoveEditPost();
  // });
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="column is-5">
      <div className="instaPreviewArea">
        <div className="table-container">
          <div id="instaCardArea">
            <div id="instaPostCard">
              <div
                class="columns is-vcentered mb-0 is-mobile"
                style={{ padding: "14px 16px 0px 16px" }}
              >
                <div class="column is-1 pr-0" style={{ width: "55px" }}>
                  <img
                    id="profilePicture"
                    alt=""
                    style={{ backgroundImage: `url(${postAuthor.img})` }}
                  />
                  <img
                    class="story-icon is-hidden"
                    id="storyIcon"
                    src={postAuthor.img}
                    alt="story"
                  />
                </div>
                <div class="column is-8 pl-0">
                  {" "}
                  <span class="label username-text mb-0">
                    <span id="textUserName" style={{ fontWeight: "600" }}>
                      {username}
                    </span>
                    <span id="verifiedIcon" style={{ color: "#1b95e0" }}>
                      <svg width="14" height="14">
                        <use href="/"></use>
                      </svg>
                    </span>
                  </span>
                  <p class="description-text" id="textDescription">
                    <span id="idText">New Jersey, USA</span>
                  </p>
                </div>
                <div class="column" style={{ width: "50%", padding: "0px" }}>
                  <div class="has-text-right">
                    {" "}
                    {username === localStorage.getItem("username") &&
                    location.pathname === "/profile" ? (
                      <div
                        class="menu-nav"
                        style={{
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <div class="dropdown-container" tabindex="-1">
                          <div class="three-dots"></div>
                          <div class="dropdown2" style={{ textAlign: "left" }}>
                            <div
                              onClick={() => {
                                handleClick();
                              }}
                            >
                              {" "}
                              Edit
                            </div>

                            <div
                              onClick={() => {
                                handleDelete();
                              }}
                            >
                              Delete
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="action-btn">
                        {localStorage.getItem("username") !== username && (
                          <button
                            type="button"
                            onClick={() => handleFollow(postAuthor)}
                          >
                            <span className="action">
                              {followingUsername.includes(username)
                                ? "Following"
                                : "Follow"}
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="post-image1">
                {img && <img id="postImage" src={img} alt="post" />}
                {vid && <video id="postImage" controls src={vid} />}
              </div>
              <div class="tag-icon is-hidden" id="tagIconArea">
                {" "}
                <span class="material-icons has-text-white">
                  <svg width="12" height="12">
                    <use href="/"></use>
                  </svg>
                </span>
              </div>
              <div id="imageCountBubblesArea"></div>
              <div
                id="likeCommShareBtnArea"
                style={{ padding: "18px 16px 14px 16px" }}
              >
                <div
                  className="post-card-icons-mobile-view"
                  style={{ marginBottom: "12px" }}
                >
                  <div className="icon-left">
                    <span
                      onClick={handlePostLike}
                      id="likeBtnArea"
                      style={{ marginRight: "12px", cursor: "pointer" }}
                    >
                      <svg
                        id="likeOutlinedIcon"
                        fill="#262626"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        class={
                          postState.likedPosts
                            ? postState.likedPosts
                                .map(({ _id }) => _id)
                                .includes(post._id)
                              ? "is-hidden"
                              : ""
                            : ""
                        }
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>{" "}
                      <svg
                        id="liked"
                        fill="#ed4956"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                        class={
                          postState.likedPosts
                            ? postState.likedPosts
                                .map(({ _id }) => _id)
                                .includes(post._id)
                              ? ""
                              : "is-hidden"
                            : "is-hidden"
                        }
                      >
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    </span>
                    <span style={{ marginRight: "12px" }}>
                      <svg
                        id="commentIcon"
                        color="#262626"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        id="shareIcon"
                        color="#262626"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </span>
                  </div>
                  <div className="icon-right">
                    <span style={{ marginLeft: "200px" }}>
                      <svg
                        onClick={handleBookmark}
                        id="savePostIcon"
                        color="#262626"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill={
                            postState.bookmark
                              .map(({ _id }) => _id)
                              .includes(_id)
                              ? "black"
                              : "none"
                          }
                          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>{" "}
                    </span>{" "}
                  </div>
                </div>{" "}
                <div id="likesCountTextArea">
                  {" "}
                  <span id="countLikes">{/*{post.likes.likeCount}*/}</span>{" "}
                  <span>{likes.likeCount} likes</span>{" "}
                </div>{" "}
                <div id="postTextArea">
                  {" "}
                  <b id="postTextUserName" style={{ fontWeight: "630" }}>
                    {localStorage.getItem("username") === username ? (
                      <NavLink to="/profile" style={{ color: "black" }}>
                        {" "}
                        {username}
                      </NavLink>
                    ) : (
                      <NavLink
                        onClick={() => {
                          getUser(
                            userState.allUsers.find(
                              (user) => user.username === username
                            )._id
                          );
                        }}
                        to={`/profile/${username}`}
                        style={{ color: "black" }}
                      >
                        {" "}
                        {username}
                      </NavLink>
                    )}
                  </b>
                  &nbsp;
                  <span id="instaPostText" className="content-input">
                    {edit ? (
                      <span className="edit-post-send-btn">
                        <input
                          className="edit-caption"
                          type="text"
                          value={postState.editPost.caption}
                          onChange={(e) => {
                            postDispatch({
                              type: "EDIT_POST",
                              data: e.target.value,
                            });
                          }}
                          onKeyDown={(e) => handleEditPost(e)}
                        />
                        <span
                          className="send-icon"
                          style={{ position: "static" }}
                          onClick={() => handleEditBtnSend()}
                        >
                          <i class="fa fa-send-o" value="send"></i>
                        </span>
                      </span>
                    ) : (
                      content
                    )}
                  </span>{" "}
                </div>{" "}
                <div id="commentCountTextArea">
                  {" "}
                  {comments && comments.length >= 2 && (
                    <div
                      onClick={() => showAllComments(!viewAllComments)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>
                        {viewAllComments
                          ? comments.length > 2
                            ? "Hide comments"
                            : ""
                          : comments.length > 2
                          ? `View All ${comments.length} comments`
                          : ""}
                      </span>{" "}
                      {/* <span id="countComments">{comments.length}</span>{" "} */}
                    </div>
                  )}
                </div>{" "}
                {comments && !viewAllComments && (
                  <>
                    {comments.map((comment, idx) => {
                      if (idx <= 1) {
                        return (
                          <div
                            class="columns is-mobile comment-area"
                            id="commentArea2"
                          >
                            <div class="column pb-0">
                              {" "}
                              <b
                                id="commentUsername2"
                                style={{ fontWeight: "630", cursor: "pointer" }}
                              >
                                <NavLink
                                  onClick={() => {
                                    getUser(
                                      userState.allUsers.find(
                                        ({ username }) =>
                                          username === comment.username
                                      )._id
                                    );
                                  }}
                                  to={`/profile/${comment.username}`}
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  {comment.username}
                                </NavLink>
                              </b>
                              &nbsp;
                              <span id="commentText2">
                                {comment.comment}
                              </span>{" "}
                            </div>{" "}
                            {/* <div
                              class="column is-1 pb-0"
                              style={{ width: "auto" }}
                            >
                              {" "}
                              <svg
                                id="secondCommentIcon"
                                fill="#262626"
                                height="12"
                                width="12"
                                viewBox="0 0 48 48"
                              >
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                              </svg>
                            </div> */}
                          </div>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </>
                )}
                {comments && viewAllComments && (
                  <>
                    {comments.map((comment) => {
                      return (
                        <div
                          class="columns is-mobile comment-area"
                          id="commentArea2"
                        >
                          <div class="column pb-0">
                            {" "}
                            <b
                              id="commentUsername2"
                              style={{ fontWeight: "630" }}
                            >
                              <NavLink
                                onClick={() => {
                                  getUser(
                                    userState.allUsers.find(
                                      ({ username }) =>
                                        username === comment.username
                                    )._id
                                  );
                                }}
                                to={`/profile/${comment.username}`}
                                style={{ color: "black" }}
                              >
                                {" "}
                                {comment.username}
                              </NavLink>
                            </b>
                            &nbsp;
                            <span id="commentText2">
                              {comment.comment}
                            </span>{" "}
                          </div>{" "}
                          {/* <div
                            class="column is-1 pb-0"
                            style={{ width: "auto" }}
                          >
                            {" "}
                            <svg
                              id="secondCommentIcon"
                              fill="#262626"
                              height="12"
                              width="12"
                              viewBox="0 0 48 48"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </div> */}
                        </div>
                      );
                    })}
                  </>
                )}
                <div className="add-comment">
                  <input
                    value={commentInput}
                    type="text"
                    placeholder="Add a comment..."
                    onChange={(e) => handleInputChange(e)}
                    onKeyDown={(e) => handleAddComment(e)}
                  />
                  <div
                    className="send-icon"
                    onClick={() => handleCommentButton()}
                  >
                    <i class="fa fa-send-o" value="send"></i>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
