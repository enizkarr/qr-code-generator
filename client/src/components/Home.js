import React, { useEffect, useState, useContext } from "react";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Phone from "../assets/images/phone.svg";
import { removeCode } from "../api/qrcode";
import Modal from "react-bootstrap/Modal";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { openCode } from "../api/qrcode";
import { listCodes } from "../api/qrcode";
import Show from "./Show";
import AppContext from "./AppContext.js";

function Home() {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [codeToDelete, setCodeToDelete] = useState(null);
  const { setShowOpenedCodeModal, setOpenedCode, toggleShow } =
    useContext(AppContext);
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data);
    };
    fetchCodes();
  }, []);

  const handleClick = async (id) => {
    try {
      const dataFromCode = await openCode(id);
      setOpenedCode(dataFromCode);
      setShowOpenedCodeModal(true);
    } catch (error) {
      console.error("this is an error", error);
    }
  };

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
    return (
      <div className="cardsDiv">
        {codes.map((code, index) => (
          <Card key={code._id} style={{ width: "18rem", fontFamily: "Mogra" }}>
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

  // const openedCodeDetails = () => {
  //   if (openedCode === null) {
  //     return null;
  //   }
  //   const { title, qrCodeDataURL, _id } = openedCode;
  //   return (
  //     <Modal
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //       show={showOpenedCodeModal}
  //       onHide={() => setShowOpenedCodeModal(false)}
  //     >
  //       <Modal.Body
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <p>
  //           Scan the QR Code to access our location! Open the location in mobile
  //           browser.
  //         </p>
  //         <Card.Img
  //           variant="top"
  //           src={qrCodeDataURL}
  //           style={{ maxWidth: "60%" }}
  //         />
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={() => setShowOpenedCodeModal(false)}>Return</Button>
  //         <Button onClick={() => handleDownload(title, qrCodeDataURL)}>
  //           Download
  //         </Button>
  //         <Button onClick={() => handleDelete(_id)}>Delete</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // };
  ////////////

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
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Show setCodes={setCodes} handleDownload={handleDownload} handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;
