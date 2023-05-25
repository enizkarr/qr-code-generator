import React from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { openCode } from "../api/qrcode";
// import { useParams, useNavigate } from "react-router-dom";

function Show() {
  // const navigate = useNavigate();
  // const { id } = useParams();

  // const [code, setCode] = useState({
  //   title: "",
  //   url: "",
  // });

  // const fetchCode = async () => {
  //   const data = await openCode(id);
  //   const { title, url } = data.data;
  //   setCode({ title, url });
  // };
  // const [modalShow, setModalShow] = useState(true);

  // useEffect(() => {
  //   fetchCode();
  // }, []);

  // const handleModalShow = () => {
  //   setModalShow(true);
  // };

  // const handleClose = () => {
  //   navigate("/");
  // };
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

  return <div>
    {/* {openedCodeDetails()} */}
    </div>;
}

export default Show;
