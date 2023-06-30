import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./followers-list.css";
import { useUserContext } from "../../context/userContext";
import SuggestionCard from "../Suggestion.js/SuggestionCard";

export default function FollowersList({ followers, following, allOtherUsers }) {
  const [smShow, setSmShow] = useState(false);
  const { userState } = useUserContext();
  console.log(followers);
  return (
    <>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setSmShow(true)}
        className="me-2"
      >
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
                : "Suggestions"}
            </Modal.Title>
          </ModalHeader>

          {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
  </Modal.Header>  */}
          <Modal.Body>
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
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
