import React from "react";
import Button from "react-bootstrap/Button";
import Logo from "../assets/images/logo.png";
import Generate from "./Generate";
import { Link } from "react-router-dom";
function Header({ setToggleShow, toggleShow }) {
  const handleShow = () => {
    setToggleShow(true);
  };

  return (
    <div className="headerDiv">
      <header
        style={{
          padding: "1%",
          height: "6em",
          borderBottom: "1px solid black",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "60px", float: "left" }}
          />
        </Link>
        <form>
          <input className="searchInput" type="text" placeholder="search" />
        </form>
        <Link to="/qrcode">
          <Button
            variant="warning"
            onClick={() => handleShow()}
            style={{ float: "right", width: "5%" }}
          >
            Show
          </Button>
        </Link>
        <Generate />
      </header>
    </div>
  );
}

export default Header;
