import React, { useEffect, useState } from "react";
import { listCodes } from "../api/qrcode";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home({ codes }) {
  const [renderShow, setRenderShow] = useState();

  function renderCodes() {
    const { qrCodeDataURL } = codes;
    return (
      <div className="cardsDiv">
        {codes.map((code, index) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{code.title}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Open</Button>
              <Button variant="primary">Delete</Button>
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

  return <div>{renderCodes()}</div>;
}

export default Home;
