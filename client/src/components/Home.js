import React, { useEffect, useState } from "react";
import { listCodes } from "../api/qrcode";
import QRandom from "../assets/images/QRandom.jpg";
import LocationImg from "../assets/images/Location.jpg"

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
      <div>
        <h3>QR Code</h3>
        <img src={QRandom} />
      </div>
      <div>
        <h3>QR Code Title</h3>
        <img src={LocationImg} style={{maxWidth:"600px"}}/>
      </div>
    </div>
  );
}

export default Home;
