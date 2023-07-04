import { useState } from "react";
import { Modal } from "react-bootstrap";
import ExplorePostCard from "../Posts/ExplorePostCard";
import "./modal-detail.css";
import PostCard from "../Posts/PostCard";
import SuggestionCard from "../Suggestion.js/SuggestionCard";
import { useUserContext } from "../../context/userContext";
import Comment from "../Comment.js/Comment";
import "../Posts/post-card.css";
import { usePostContext } from "../../context/postContext";

export default function ModalDetail(post) {
  const [show, setShow] = useState(false);
  const [showLike, setShowLike] = useState(false);
  const { userState } = useUserContext();
  const [edit, setEdit] = useState();
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState(post.comments);
  const {
    deletePost,
    disLikePost,
    likePost,
    postState,
    removeBookmark,
    addToBookmark,
    postDispatch,
  } = usePostContext();

  const { likes, username, _id } = post;
  const user = userState.allUsers.find((user) => user.username === username);

  function handleShow() {
    setShow(true);
  }

  const handleDelete = () => {
    setShow(false);
    deletePost(_id);
  };
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

  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };
  const handleAddComment = (e) => {
    if (e.key === "Enter") {
      postDispatch({
        type: "ADD_COMMENTS",
        postId: _id,
        comment: e.target.value,
      });
      setCommentList(() => [
        ...commentList,
        {
          username: localStorage.getItem("username"),
          comment: commentInput,
        },
      ]);

      setCommentInput("");
    }
  };
  // useEffect(() => {
  //   getExplorePosts();
  // }, []);
  return (
    <>
      <div onClick={handleShow}>
        <ExplorePostCard {...post} />
      </div>

      <Modal
        show={show}
        fullscreen="true"
        onHide={() => setShow(false)}
        className="detail-modal"
        dialogClassName="modal-20w"
      >
        <div className="post-image">
          {post.img && (
            <img className="post-cover " src={post.img} alt="post-cover" />
          )}
          {post.vid && <video className="post-cover" controls src={post.vid} />}
        </div>
        <div className="not-show">
          <PostCard {...post} />
        </div>
        <div className="post-detail">
          <Modal.Header>
            <div className="detail-card-header">
              <SuggestionCard {...user} noShow />

              <div class="has-text-right">
                {" "}
                {username === localStorage.getItem("username") ? (
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
                            setEdit(true);
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
                  ""
                )}
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Comment
              post={post}
              edit={edit}
              setEdit={setEdit}
              commentList={commentList}
            />
          </Modal.Body>

          <Modal.Footer>
            <div
              className="detail-card-footer"
              id="likeCommShareBtnArea"
              style={{ padding: "18px 16px 14px 16px" }}
            >
              <div style={{ marginBottom: "12px" }} className="icons">
                <div>
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
                <div>
                  <span>
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
                          postState.bookmark.map(({ _id }) => _id).includes(_id)
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
              <div className="add-comment">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(e) => handleInputChange(e)}
                  onKeyDown={(e) => handleAddComment(e)}
                />
              </div>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
