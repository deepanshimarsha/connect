import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./create-modal-form.css";
import NextModalForm from "./NextModalForm";
import CreateButton from "../CreateButton/CreateButton";

export default function CreateModalForm() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const filePicekerRef = useRef(null);
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    clearFiles();
    setShow(false);
  }

  function handleNext() {
    setShow(false);
  }

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
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }
  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }
  return (
    <>
      <div onClick={() => handleShow()}>
        <CreateButton />
      </div>

      {/* <Button className="me-2 mb-2" >
        Full screen
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{ flexDirection: "column" }}
      >
        <div className="form-container">
          <Modal.Header>
            {imagePreview != null || videoPreview != null ? (
              <Modal.Title>
                <div className="preview-title">
                  {" "}
                  <div onClick={clearFiles} className="cursor-pointer">
                    <i
                      class="fa fa-angle-left"
                      style={{ fontSize: "36px" }}
                    ></i>
                  </div>
                </div>
              </Modal.Title>
            ) : (
              <Modal.Title>Create new post</Modal.Title>
            )}
            {(imagePreview || videoPreview) && (
              <div onClick={handleClose} className="close-icon cursor-pointer">
                <i class="material-icons" style={{ fontSize: "30px" }}>
                  close
                </i>
              </div>
            )}
          </Modal.Header>
          <Modal.Body>
            {imagePreview != null || videoPreview != null ? (
              <div className="preview">
                {imagePreview != null && <img src={imagePreview} alt="" />}
                {videoPreview != null && (
                  <video controls src={videoPreview}></video>
                )}
              </div>
            ) : (
              <>
                <div className="select-file-container">
                  <div className="illustration">
                    <img src="https://img.freepik.com/premium-vector/photo-picture-online-album-digital-gallery-watching-website_212005-272.jpg?w=996" />
                  </div>
                  <div>
                    <span>Drag photos and videos here</span>
                  </div>
                  <div>
                    <input
                      ref={filePicekerRef}
                      accept="image/*, video/*"
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
          {(imagePreview || videoPreview) && (
            <Modal.Footer>
              <NextModalForm
                image={imagePreview}
                video={videoPreview}
                closePrev={handleNext}
              />
              {/* <div className="cursor-pointer">
                <h5>Next</h5>
              </div> */}
            </Modal.Footer>
          )}
        </div>
      </Modal>
    </>
  );
}
