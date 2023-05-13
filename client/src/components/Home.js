import React, { useEffect, useState } from "react";
import { listCodes } from "../api/qrcode";

function Home() {

  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data)
    }
    fetchCodes();
  }, [])
  console.log(codes)


  return (
    <div>
      <h1>QR CODE</h1>
      <h1>QR CODE</h1>
      <h1>QR CODE</h1>
      <h1>QR CODE</h1>
    </div>
  );
}

export default Home;
