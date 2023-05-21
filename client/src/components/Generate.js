import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { generateCode } from "../api/qrcode";
import { useNavigate } from "react-router-dom";

function Generate() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title:"",
    url:""
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : value
    }))
  }

  const handleGenerate = async () => {
    try {
      const data = await generateCode(formData.title, formData.url);
    } catch (error) {
      console.error("this is an error",error);
    }
  navigate('/qrcode');
  }

  return (
    <div className="headerDiv" style={{float:"right", width:"5%"}} >
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
