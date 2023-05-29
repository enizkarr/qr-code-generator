import React, { useEffect, useState, useContext } from "react";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Phone from "../assets/images/phone.svg";
import { removeCode } from "../api/qrcode";
import Modal from "react-bootstrap/Modal";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { Check } from "react-bootstrap-icons";
import { openCode } from "../api/qrcode";
import { listCodes } from "../api/qrcode";
import Show from "./Show";
import AppContext from "./AppContext.js";

function Home() {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [codeToDelete, setCodeToDelete] = useState(null);
  const { setShowOpenedCodeModal, setOpenedCode, toggleShow, searchTerm, codes, setCodes } =
    useContext(AppContext);
  const [successfulDelete, setSuccessfulDelete] = useState(false);

  const [deletedID, setDeletedID] = useState();
  useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data);
    };
    fetchCodes();
  }, [searchTerm]);

  const handleClick = async (id) => {
    try {
      const dataFromCode = await openCode(id);
      setOpenedCode(dataFromCode);
      setShowOpenedCodeModal(true);
    } catch (error) {
      console.error("this is an error", error);
    }
  };

  const handleDelete = async (id, title) => {
    try {
      setCodeToDelete(id);
      setConfirmationModal(true);
      setDeletedID(title)
      
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
        setSuccessfulDelete(true);
        setTimeout(() => {
          setSuccessfulDelete(false);
        }, 3000);
        const data = await listCodes()
        setCodes(data.data)
      }
    } catch (error) {
      console.log("Thisis an error", error);
    }
  };

  const handleDownload = async (filename, qrCodeDataURL) => {
    try {
      const link = document.createElement("a");
      link.href = qrCodeDataURL;
      link.download = filename;
      link.click();
    } catch (error) {
      console.log("This is an error", error);
    }
  };

  const renderCodes = () => {
    const filteredCodes = codes.filter((code) =>
      code.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="cardsDiv" style={{ paddingBottom: "5%" }}>
        {successfulDelete ? deleteWasSuccessful(deletedID) : null}

        {filteredCodes.map((code) => (
          <Card
            key={code._id}
            style={{
              width: "18rem",
              fontFamily: "Mogra",
              marginBottom: "0.5rem",
            }}
          >
            <Card.Title
              style={{
                margin: "0px",
                textAlign: "center",
                fontFamily: "Mogra",
              }}
            >
              {code.title}
            </Card.Title>
            <Card.Img alt="code url" variant="top" src={code.qrCodeDataURL} />
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
                onClick={() => handleClick(code._id)}
                style={{ paddingTop: "0px", maxWidth: "60px" }}
              >
                <img alt="phone" src={Phone} style={{ width: "2.5rem" }} />
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDelete(code._id, code.title)}
                style={{ width: "100%" }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  const renderHome = () => {
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
              alt="qr random"
              className="presImg1"
              src={QRandom}
              style={{ maxWidth: "510px" }}
            />
          </div>
          <div style={{ marginTop: "3%" }}>
            <img
              alt="mock location"
              className="presImg2"
              src={LocationImg}
              style={{ maxWidth: "500px", height: "440px", paddingRight: "1%" }}
            />
          </div>
        </div>
      </div>
    );
  };

  const deleteWasSuccessful = (title) => {
    return (
      <div className="deleteSuccessMessage">
        <span className="deleteIcon">
          <Check size={45} color="white" />
        </span>
        <span className="deleteText">
          The QR code {title} was successfuly deleted!
        </span>
      </div>
    );
  };

  return (
    <div>
      {toggleShow ? renderCodes() : renderHome()}
      <Modal
        show={confirmationModal}
        onHide={() => setConfirmationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ display: "flex", columnGap: "4%", alignItems: "center" }}
        >
          <ExclamationTriangleFill size={40} color="orange" />
          Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setConfirmationModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={() => confirmDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Show
        setCodes={setCodes}
        handleDownload={handleDownload}
        handleDelete={handleDelete}
        deleteWasSuccessful={deleteWasSuccessful}
        successfulDelete={successfulDelete}
      />
    </div>
  );
}

export default Home;
