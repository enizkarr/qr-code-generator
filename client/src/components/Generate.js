import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { generateCode } from "../api/qrcode";
import AppContext from "./AppContext";
import { listCodes } from "../api/qrcode";

const inputValidation = (codes, title, url) => {
  const specialCharsRegex = /^[a-zA-Z0-9 ]*$/;

  if (!title || !url) {
    return "Input fields must not be empty!";
  } else if (title.length < 2 || title.length > 25) {
    return "Title should be longer than 2 and less than 25 characters!";
  } else if (!specialCharsRegex.test(title)) {
    return "Title can only contain alphanumeric characters and spaces!";
  } else if (!/^www\.[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(url)) {
    return "Enter a valid URL, please.";
  } else {
    const duplicateCode = codes.find((code) => code.title === title || code.url === url);
    if (duplicateCode) {
      return "Title already exists!";
    }
  }
  
  // No validation issues
  return null;
};




function Generate() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
  });
  const { setCodes, codes } = useContext(AppContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validationMessage, setValidationMessage] = useState(false);
  const [message, setMessage] = useState("")
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleGenerate = async () => {
    const returnValue = inputValidation(codes, formData.title, formData.url);
    if (inputValidation(codes, formData.title, formData.url)) {
      setValidationMessage(true)
      setMessage(returnValue)
      setTimeout(() => {
        setValidationMessage(false)
      }, 3000);
      setFormData({ title: "", url: "" })
      return null;
    }

    try {
      await generateCode(formData.title, formData.url);
      const data = await listCodes();
      setShow(false)
      setCodes(data.data)
    } catch (error) {
      console.error("this is an error", error);
    }
  };

  const errorMessage = () => {
    return (
      <div className="errorMessageDiv">
        <span className="deleteText" style={{margin:"2%"}}>
         {message}
        </span>
      </div>
    )
  }

  return (
    <div
      className="headerDiv"
      style={{ float: "right" }}
    >

      <Button variant="success" onClick={handleShow}>
        Generate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Generate QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>QR Code Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your title here"
                autoFocus
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL</Form.Label>
              <Form.Control
                as="textarea"
                name="url"
                rows={3}
                placeholder="Enter your url here"
                value={formData.url}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          {validationMessage ? errorMessage() : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleGenerate}>
            Generate
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default Generate;
