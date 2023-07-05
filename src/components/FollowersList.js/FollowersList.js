import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./followers-list.css";
import SuggestionCard from "../Suggestion.js/SuggestionCard";

export default function FollowersList({
  followers,
  following,
  allOtherUsers,
  comments,
}) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setSmShow(true)}
        className="me-2"
      >
        {comments && (
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
        )}
        {following && (
          <span>{following.length ? following.length : "0"} following</span>
        )}
        {followers && (
          <span>{followers.length ? followers.length : "0"} followers</span>
        )}
        {allOtherUsers && <span>See all</span>}
      </span>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <div className="list-main">
          <ModalHeader closeButton>
            <Modal.Title>
              {followers
                ? "Followers"
                : following
                ? "Following"
                : allOtherUsers
                ? "Suggestions"
                : "Comments"}
            </Modal.Title>
          </ModalHeader>

          {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
  </Modal.Header>  */}
          <Modal.Body style={{ overflowY: "scroll", height: "88%" }}>
            {allOtherUsers && (
              <div>
                {allOtherUsers.map((user) => {
                  return (
                    <div className="user-list-item">
                      <SuggestionCard {...user} />
                    </div>
                  );
                })}
              </div>
            )}
            {following && (
              <div>
                {following.map((user) => {
                  return (
                    <div className="user-list-item">
                      <SuggestionCard {...user} />
                    </div>
                  );
                })}
              </div>
            )}
            {followers && (
              <div>
                {followers.map((user) => {
                  return (
                    <div className="user-list-item">
                      <SuggestionCard {...user} />
                    </div>
                  );
                })}
              </div>
            )}
            {comments && (
              <div>
                {comments.map((comment) => {
                  return (
                    <div
                      class="columns is-mobile comment-area"
                      id="commentArea2"
                    >
                      <div class="column pb-0">
                        {" "}
                        <b id="commentUsername2" style={{ fontWeight: "630" }}>
                          {comment.username}
                        </b>
                        &nbsp;
                        <span id="commentText2">{comment.comment}</span>{" "}
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
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
