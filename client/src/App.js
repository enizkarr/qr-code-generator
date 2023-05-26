import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./components/components.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Show from "./components/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";

function App() {

  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode/" element={<Home />} />
            <Route path="/qrcode/:id" element={<Show />} />
          </Routes>
          <Footer />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
