import Modal from "react-bootstrap/Modal";
import "../CreateModalForm.js/create-modal-form.css";
import "./edit-profile.css";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";

export default function ChangeAvatarModal() {
  const avatars = [
    "https://img.myloview.com/posters/businessman-icon-image-male-avatar-profile-vector-with-glasses-and-beard-hairstyle-400-228654859.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/253/small/beautiful-woman-wearing-sunglasses-avatar-character-icon-free-vector.jpg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
    "https://img.freepik.com/premium-vector/3d-smiling-women-avatar-happy-face-icon-character-vector_313242-1220.jpg",
    // "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/297/small/beautiful-woman-avatar-character-icon-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/010/967/316/small_2x/avatar-bearded-man-free-vector.jpg",
    "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=360",
  ];
  const [show, setShow] = useState(false);

  const [imgUrl, setImgUrl] = useState(null);
  const { userDispatch } = useUserContext();

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  const handleSubmit = () => {
    if (imgUrl === null) {
    } else if (imgUrl === "none") {
      userDispatch({
        type: "SET_EDITED_PROFILE_INPUT",
        field: "IMG",
        data: "https://icon-library.com/images/none-icon/none-icon-1.jpg",
      });
    } else {
      userDispatch({
        type: "SET_EDITED_PROFILE_INPUT",
        field: "IMG",
        data: imgUrl,
      });
    }
    setImgUrl(null);
    setShow(false);
  };

  return (
    <>
      <div onClick={() => handleShow()}>Choose from avatars</div>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ flexDirection: "column" }}
      >
        <div className="form-container">
          <Modal.Header>
            <Modal.Title>Choose</Modal.Title>

            <div onClick={handleClose} className="close-icon cursor-pointer">
              <i class="material-icons" style={{ fontSize: "30px" }}>
                close
              </i>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="avatar-collection">
              {avatars.map((url) => {
                return (
                  <div>
                    <img
                      style={{
                        border:
                          url === imgUrl ? "2px rgb(13,110,253) solid" : "none",
                        borderRadius: "50%",
                      }}
                      src={url}
                      alt="avatar"
                      onClick={() => {
                        setImgUrl(url);
                      }}
                    />
                  </div>
                );
              })}
              <div>
                <img
                  style={{
                    border:
                      imgUrl === "none" ? "2px rgb(13,110,253) solid" : "none",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    setImgUrl("none");
                  }}
                  src="https://icon-library.com/images/none-icon/none-icon-1.jpg"
                  alt="none"
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className="select-btn" onClick={handleSubmit}>
              Select
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
