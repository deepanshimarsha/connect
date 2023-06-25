import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ExplorePostCard from "../Posts/ExplorePostCard";
import "./modal-detail.css";
import PostCard from "../Posts/PostCard";
import SuggestionCard from "../Suggestion.js/SuggestionCard";
import { useUserContext } from "../../context/userContext";

export default function ModalDetail(post) {
  const [show, setShow] = useState(false);
  const { userState } = useUserContext();
  const { content, img, likes, username } = post;
  const user = userState.allUsers.find((user) => user.username === username);

  function handleShow() {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  };

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
          <img src={post.img} alt="post-cover" className="post-cover" />
        </div>
        <div className="not-show">
          <PostCard {...post} />
        </div>
        <div className="post-detail">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            <SuggestionCard {...user} noShow />
          </Modal.Header>
          <Modal.Body>
            {/* <div className="not-show">
              <PostCard />
            </div> */}
            <div className="modal-body-img">
              <img
                src="https://pbs.twimg.com/media/Ekzemj2WAAAyDcf.jpg"
                alt="post-cover"
                className="post-cover"
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
