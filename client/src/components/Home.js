import React, { useEffect, useState } from "react";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Phone from "../assets/images/phone.svg";
import { removeCode } from "../api/qrcode";
import Modal from "react-bootstrap/Modal";

function Home({ codes }) {
  const [renderShow, setRenderShow] = useState();
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [codeToDelete, setCodeToDelete] = useState(null);

  const handleDelete = async (id) => {
    try {
      setCodeToDelete(id);
      setConfirmationModal(true);
    } catch (error) {
      console.error("this is an error", error);
    }
  };
  const confirmDelete = async () => {
    try {
      if (codeToDelete) {
        await removeCode(codeToDelete);
        setCodeToDelete(null);
        setConfirmationModal(false);
      }
    } catch (error) {
      console.log("Thisis an error", error);
    }
  };

  function renderCodes() {
    return (
      <div className="cardsDiv">
        {codes.map((code, index) => (
          <Card style={{ width: "18rem", fontFamily: "Mogra" }}>
            <Card.Title
              style={{
                margin: "0px",
                textAlign: "center",
                fontFamily: "Mogra",
              }}
            >
              {code.title}
            </Card.Title>
            <Card.Img variant="top" src={code.qrCodeDataURL} />
            <Card.Body
              style={{
                display: "grid",
                justifyItems: "center",
                paddingTop: "0px",
                marginTop: "0px",
              }}
            >
              <Button
                variant="link"
                style={{ paddingTop: "0px", maxWidth: "60px" }}
              >
                <img src={Phone} style={{ width: "2.5rem" }} />
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDelete(code._id)}
                style={{ width: "100%" }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }

  function homePage() {
    return (
      <div className="homeDiv">
        <div className="image-container">
          <div className="homeList">
            <h3>Create</h3>
            <h3>Your Own</h3>
            <h3>QR Codes</h3>
          </div>
          <div style={{ marginTop: "3%" }}>
            <img
              className="presImg1"
              src={QRandom}
              style={{ maxWidth: "510px" }}
            />
          </div>
          <div style={{ marginTop: "3%" }}>
            <img
              className="presImg2"
              src={LocationImg}
              style={{ maxWidth: "500px", height: "440px", paddingRight: "1%" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderCodes()}
      <Modal
        show={confirmationModal}
        onHide={() => setConfirmationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this QR code?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setConfirmationModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
