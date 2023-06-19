import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ExplorePostCard from "../Posts/ExplorePostCard";
import "./modal-detail.css";
import PostCard from "../Posts/PostCard";

export default function ModalDetail() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div onClick={handleShow}>
        <ExplorePostCard />
      </div>

      <Modal
        show={show}
        fullscreen="true"
        onHide={() => setShow(false)}
        className="detail-modal"
        dialogClassName="modal-20w"
      >
        <div className="post-image">
          <img
            src="https://pbs.twimg.com/media/Ekzemj2WAAAyDcf.jpg"
            alt="post-cover"
            className="post-cover"
          />
        </div>
        <div className="not-show">
          <PostCard />
        </div>
        <div className="post-detail">
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
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
