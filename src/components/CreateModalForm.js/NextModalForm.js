import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./next-modal-form.css";
import EmojiPicker from "emoji-picker-react";
import { usePostContext } from "../../context/postContext";

export default function NextModalForm({ image, video }) {
  const [show, setShow] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  const { postState, postDispatch, createNewPost } = usePostContext();

  function handleShow() {
    setShow(true);
  }
  const handleClose = () => {
    postDispatch({ type: "SHOW_CREATE_MODAL", mode: "DO_NOT_SHOW" });
    clearFiles();
    setShowEmojis(false);
    setShow(false);
  };
  const onEmojiClick = (emojiData) => {
    postDispatch({
      type: "CREATE_POST",
      field: "CONTENT",
      data: postState.createPost.content
        ? postState.createPost.content + emojiData.emoji
        : emojiData.emoji,
    });
  };
  function clearFiles() {
    postDispatch({ type: "CREATE_POST", field: "IMAGE", data: null });
    postDispatch({ type: "CREATE_POST", field: "VIDEO", data: null });
  }

  const handlePost = () => {
    setShowEmojis(false);
    postDispatch({ type: "SHOW_CREATE_MODAL", mode: "DO_NOT_SHOW" });
    setShow(false);
    createNewPost();
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleShow}>
        <h5>Next</h5>
      </div>

      <Modal
        show={show}
        fullscreen="true"
        onHide={() => {
          clearFiles();
          postDispatch({ type: "SHOW_CREATE_MODAL", mode: "DO_NOT_SHOW" });
          setShowEmojis(false);
          setShow(false);
        }}
        className="modal-main"
        dialogClassName="modal-20w"
        style={{ width: "100%" }}
      >
        <div className="form-container">
          <Modal.Header>
            <Modal.Title>
              <div className="suggestion-card">
                <div className="suggested-user">
                  <div className="profile-img">
                    <NavLink
                      className="user-link"
                      style={{ height: "44px", width: "44px" }}
                    >
                      <img src="https://github.com/mdo.png" alt="profile" />
                    </NavLink>
                  </div>
                  <div className="profile-name">
                    <div className="profile-content">
                      <span className="username">
                        {localStorage.getItem("username")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Title>
            <div onClick={handleClose} className="cursor-pointer">
              <i class="material-icons" style={{ fontSize: "30px" }}>
                close
              </i>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="preview">
              {image != null && (
                <img src={image} alt="post-cover" height="100%" />
              )}
              {video != null && <video controls src={video} height="100%" />}
            </div>
          </Modal.Body>
          <Modal.Footer width="100%">
            <div className="text-area">
              <div className="caption-input">
                <textarea
                  value={
                    postState.createPost.content !== null
                      ? postState.createPost.content
                      : ""
                  }
                  onChange={(e) => {
                    postDispatch({
                      type: "CREATE_POST",
                      field: "CONTENT",
                      data: e.target.value,
                    });
                    // setInput(e.target.value);
                  }}
                  placeholder="Write a caption"
                  class="form-control"
                  id="exampleFormControlTextarea1 mytextarea"
                  rows="3"
                ></textarea>
                <button
                  className="emoji-icon"
                  onClick={() => setShowEmojis(!showEmojis)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="emoji-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {showEmojis && (
                <div className="picker-float">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <h5 onClick={handlePost}>Post</h5>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
