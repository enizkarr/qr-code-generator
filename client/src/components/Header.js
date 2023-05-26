import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../assets/images/logo.png";
import Generate from "./Generate";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { toggleShow, setToggleShow } = useContext(AppContext);
  const handleShow = () => {
    setToggleShow(true);
  };
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const goBackFunction = () => {
    if (toggleShow) {
      return <div style={{position:"absolute",marginLeft:"4%", paddingTop:"1%"}}>
        <FontAwesomeIcon icon={faArrowLeftLong} style={{margin:""}}/>
        Click Me
        </div>;
    } else return null;
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
            onClick={() => setToggleShow(false)}
          />
        </Link>
        {goBackFunction()}
        <form>
          <input
            style={{marginTop:"1vh"}}
            className="searchInput"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Link to="/qrcode">
          <Button
            variant="warning"
            onClick={() => handleShow()}
            style={{ float: "right", width: "5%", margin:"1vh" }}
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
