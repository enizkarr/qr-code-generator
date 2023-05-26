import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

function Show({ handleDelete, handleDownload }) {
  const [openedCode] = useState(null);
  const [showOpenedCodeModal, setShowOpenedCodeModal] = useState(false);

  const openedCodeDetails = () => {
    if (openedCode === null) {
      return null;
    }
    const { title, qrCodeDataURL, _id } = openedCode;
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showOpenedCodeModal}
        onHide={() => setShowOpenedCodeModal(false)}
      >
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>
            Scan the QR Code to access our location! Open the location in mobile
            browser.
          </p>
          <Card.Img
            variant="top"
            src={qrCodeDataURL}
            style={{ maxWidth: "60%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowOpenedCodeModal(false)}>Return</Button>
          <Button onClick={() => handleDownload(title, qrCodeDataURL)}>
            Download
          </Button>
          <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return <div>{openedCodeDetails()}</div>;
}

export default Show;
