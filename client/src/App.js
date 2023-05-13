import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./components/components.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Generate from "./components/Generate";
import Show from "./components/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/qrcode/:id" element={<Show/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
