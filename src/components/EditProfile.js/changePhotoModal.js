import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../CreateModalForm.js/create-modal-form.css";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";

export default function ChangePhotoModal() {
  const [show, setShow] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imgUrl, setImgUrl] = useState();
  const { userDispatch } = useUserContext();

  const filePicekerRef = useRef(null);

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  function clearFile() {
    setImgUrl(null);
    setImagePreview(null);
  }

  const handleSubmit = () => {
    if (imgUrl !== null) {
      userDispatch({
        type: "SET_EDITED_PROFILE_INPUT",
        field: "IMG",
        data: imgUrl,
      });
      setShow(false);
    }
  };

  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        const imgUrl = URL.createObjectURL(selectedFile);
        setImgUrl(imgUrl);
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        //select appropriate file
      }
    };
  }

  return (
    <>
      <div onClick={() => handleShow()}>Uplaod Photo</div>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ flexDirection: "column" }}
      >
        <div className="form-container">
          <Modal.Header>
            {imagePreview != null ? (
              <Modal.Title>
                <div className="preview-title">
                  {" "}
                  <div className="cursor-pointer" onClick={clearFile}>
                    <i
                      class="fa fa-angle-left"
                      style={{ fontSize: "36px" }}
                    ></i>
                  </div>
                </div>
              </Modal.Title>
            ) : (
              <Modal.Title>Uplaod profile photo</Modal.Title>
            )}
            {imagePreview && (
              <div onClick={handleClose} className="close-icon cursor-pointer">
                <i class="material-icons" style={{ fontSize: "30px" }}>
                  close
                </i>
              </div>
            )}
          </Modal.Header>
          <Modal.Body>
            {imagePreview != null ? (
              <div className="preview">
                {imagePreview != null && <img src={imagePreview} alt="" />}
              </div>
            ) : (
              <>
                <div className="select-file-container">
                  <div className="illustration">
                    <img
                      src="https://img.freepik.com/premium-vector/photo-picture-online-album-digital-gallery-watching-website_212005-272.jpg?w=996"
                      alt="profile"
                    />
                  </div>
                  <div>
                    <span>Drag photo here</span>
                  </div>
                  <div>
                    <input
                      ref={filePicekerRef}
                      accept="image/*"
                      onChange={previewFile}
                      type="file"
                      hidden
                    />
                    <Button
                      variant="primary"
                      className="btn"
                      onClick={() => filePicekerRef.current.click()}
                    >
                      Select from computer
                    </Button>
                    {/* <button className="btn" onClick={clearFiles}>
                      x
                    </button> */}
                  </div>
                </div>
              </>
            )}
          </Modal.Body>
          {imagePreview && (
            <Modal.Footer>
              <div className="select-btn" onClick={handleSubmit}>
                Select
              </div>
            </Modal.Footer>
          )}
        </div>
      </Modal>
    </>
  );
}
