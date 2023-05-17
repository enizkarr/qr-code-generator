import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./components/components.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Show from "./components/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { listCodes } from "./api/qrcode";

function App() {
  const [codes, setCodes] = useState([]);

 useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data);
    };
    fetchCodes();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home codes={codes} />}></Route>
          <Route path="/qrcode/:id" element={<Show />}></Route>
          <Route path="/qrcode/" element={<Show />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
