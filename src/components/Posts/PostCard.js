import "./post-card.css";
import { useUserContext } from "../../context/userContext";
import { usePostContext } from "../../context/postContext";
import { useState } from "react";
export default function PostCard(post) {
  const { img, content, likes, username, _id } = post;

  const { likePost, disLikePost } = usePostContext();

  const { userState } = useUserContext();
  const [showLike, setShowLike] = useState(false);
  const postAuthor = userState.allUsers.find(
    (user) => user.username === username
  );

  const handlePostLike = () => {
    if (showLike) {
      disLikePost(post);
    } else {
      likePost(post);
    }
    setShowLike(!showLike);
  };
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
                  />
                </div>
                <div class="column is-8 pl-0">
                  {" "}
                  <span class="label username-text mb-0">
                    <span id="textUserName">{username}</span>
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
                <div class="column">
                  <div class="has-text-right">
                    {" "}
                    {username === localStorage.getItem("username") ? (
                      <div class="dropdown habit-dropdown">
                        <i
                          class="fa fa-ellipsis-v"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul class="dropdown-menu">
                          <li>edit</li>
                          <li>delete</li>
                        </ul>{" "}
                      </div>
                    ) : (
                      ""
                    )}
                    {/* <svg id="trippleDots" fill="#262626" width="24" height="24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg> */}
                  </div>
                </div>
              </div>
              <img id="postImage" src={img} alt="post" />
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
                <div style={{ marginBottom: "12px" }}>
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
                      class={showLike ? "is-hidden" : ""}
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>{" "}
                    <svg
                      id="liked"
                      fill="#ed4956"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                      class={showLike ? "" : "is-hidden"}
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
                  <span style={{ marginLeft: "232px" }}>
                    <svg
                      id="savePostIcon"
                      color="#262626"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>{" "}
                  </span>{" "}
                </div>{" "}
                <div id="likesCountTextArea">
                  {" "}
                  <span id="countLikes">{/*{post.likes.likeCount}*/}</span>{" "}
                  <span>{likes.likeCount} likes</span>{" "}
                </div>{" "}
                <div id="postTextArea">
                  {" "}
                  <b id="postTextUserName">{username}</b>&nbsp;
                  <span id="instaPostText">{content}</span>{" "}
                </div>{" "}
                <div id="commentCountTextArea">
                  {" "}
                  <span>View all</span> <span id="countComments">423</span>{" "}
                  <span>comments</span>{" "}
                </div>{" "}
                <div
                  class="columns is-mobile comment-area"
                  id="commentArea1"
                  style={{ marginBottom: "5px" }}
                >
                  {" "}
                  <div class="column pb-0">
                    {" "}
                    <b id="commentUsername1">steverogers</b>&nbsp;
                    <span id="commentText1">On your left 😉</span>{" "}
                  </div>{" "}
                  <div class="column is-1 pb-0" style={{ width: "auto" }}>
                    {" "}
                    <svg
                      id="firstCommentIcon"
                      fill="#262626"
                      height="12"
                      width="12"
                      viewBox="0 0 48 48"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="columns is-mobile comment-area" id="commentArea2">
                  {" "}
                  <div class="column pb-0">
                    {" "}
                    <b id="commentUsername2">buckybarnes</b>&nbsp;
                    <span id="commentText2">Yeah!</span>{" "}
                  </div>{" "}
                  <div class="column is-1 pb-0" style={{ width: "auto" }}>
                    {" "}
                    <svg
                      id="secondCommentIcon"
                      fill="#262626"
                      height="12"
                      width="12"
                      viewBox="0 0 48 48"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div id="textPostTime">Add a comment...</div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}