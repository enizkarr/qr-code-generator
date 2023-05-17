import React, { useEffect, useState } from "react";
import { listCodes } from "../api/qrcode";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg";

function Home() {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data);
      console.log(data.data);
    };
    fetchCodes();
  }, []);

  function renderCodes() {
    return codes.map((e) => <div></div>);
  }

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
            style={{ maxWidth: "500px", height: "440px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
