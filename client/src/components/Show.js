import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import AppContext from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Show({ handleDelete, handleDownload }) {
  const { showOpenedCodeModal, setShowOpenedCodeModal, openedCode } =
    useContext(AppContext);

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
            display: "grid",
          }}
        >
          <h3 style={{margin:"0"}}>{title}</h3>
          <p style={{margin:"0", marginTop:"2%"}}>
            Scan the QR Code to access our location! Open the location in mobile
            browser.
          </p>
          <Card.Img
            variant="top"
            src={qrCodeDataURL}
            style={{ maxWidth: "60%", margin: "0 auto" }}
          />
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flexbox",
            justifyContent: "center",
            columnGap: "4%",
          }}
        >
          <Button onClick={() => setShowOpenedCodeModal(false)}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "4vh" }} />
          </Button>
          <Button
            className="btn btn-success"
            onClick={() => handleDownload(title, qrCodeDataURL)}
          >
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: "4vh" }} />
          </Button>
          <Button className="btn btn-danger" onClick={() => handleDelete(_id)}>
            <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "4vh" }} />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return <div>{openedCodeDetails()}</div>;
}

export default Show;
