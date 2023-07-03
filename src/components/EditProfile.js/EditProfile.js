import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./edit-profile.css";
import { useUserContext } from "../../context/userContext";
import Form from "react-bootstrap/Form";
import ChangePhotoModal from "./changePhotoModal";
import ChangeAvatarModal from "./ChangeAvatarModal";

export default function EditProfile() {
  useEffect(() => {
    getCurrentUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { userState, getCurrentUser, userDispatch, updateUser } =
    useUserContext();
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    updateUser();
    handleClose();
  };

  return (
    <div>
      <div className="edit-btn" onClick={handleShow}>
        <NavLink>Edit Profile</NavLink>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        className="modal-main"
        dialogClassName="modal-20w"
      >
        <div className="edit-modal">
          <Modal.Header closeButton>
            <Modal.Title>Setting</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="edit-body">
              <div className="body-heading">
                <span>
                  <h3>Edit Profile</h3>
                </span>
              </div>
              <div className="edit-form">
                <form>
                  <div className="form-group">
                    <div className="labels">
                      <div className="round-img">
                        <img
                          style={{ borderRadius: "50%" }}
                          height="40px"
                          width="40px"
                          src={userState.currentUser.img}
                          alt="profile"
                        />
                      </div>
                      <label>
                        <span>Bio</span>
                      </label>
                      <labe>
                        <span>Portfolio</span>
                      </labe>
                    </div>
                    <div className="input-fields">
                      <div>
                        <div>{localStorage.getItem("username")}</div>
                        <div
                          class="menu-nav"
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <div class="dropdown-container" tabindex="-1">
                            <div
                              style={{
                                cursor: "pointer",
                                color: "rgb(13,110,253)",
                              }}
                            >
                              Change profile photo
                            </div>
                            <div
                              class="dropdown2"
                              style={{ textAlign: "left" }}
                            >
                              <ChangeAvatarModal />

                              <ChangePhotoModal />
                            </div>
                          </div>
                        </div>
                      </div>
                      <textarea
                        onChange={(e) => {
                          userDispatch({
                            type: "SET_EDITED_PROFILE_INPUT",
                            field: "BIO",
                            data: e.target.value,
                          });
                        }}
                        value={userState.currentUser.bio}
                        placeholder="Write a caption"
                        class="form-control"
                        id="exampleFormControlTextarea1 mytextarea"
                        rows="3"
                        maxLength="150"
                      ></textarea>
                      <div className="form-group">
                        <Form.Control
                          onChange={(e) => {
                            userDispatch({
                              type: "SET_EDITED_PROFILE_INPUT",
                              field: "PORTFOLIO",
                              data: e.target.value,
                            });
                          }}
                          type="website"
                          placeholder="portfolio"
                          value={userState.currentUser.portfolio}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
