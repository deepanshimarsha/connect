import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./next-modal-form.css";
import EmojiPicker from "emoji-picker-react";

// import "emoji-mart/css/emoji-mart.css";
export default function NextModalForm({ image, video, closePrev }) {
  const [show, setShow] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");
  console.log(input);

  function handleShow() {
    setShow(true);
  }
  const handleClose = () => {
    setShowEmojis(false);
    closePrev();
    setShow(false);
  };
  const onEmojiClick = (event, emojiData) => {
    console.log("emojiObject", emojiData.emoji);
    setInput((prevInput) => prevInput + emojiData.emoji);
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
          setShowEmojis(false);
          setShow(false);
        }}
        className="modal-main"
        dialogClassName="modal-20w"
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
                      <img src="https://github.com/mdo.png" />
                    </NavLink>
                  </div>
                  <div className="profile-name">
                    <div className="profile-content">
                      <span className="username">deepee_e</span>
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
              {image != null && <img src={image} alt="post-cover" />}
              {video != null && <video controls src={video}></video>}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="text-area">
              <div className="caption-input">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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
              <h5>Post</h5>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
