import React, { createContext, useState, useEffect } from "react";
import { listCodes } from "../api/qrcode";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);
  const [toggleShow, setToggleShow] = useState(false);
  const [openedCode, setOpenedCode] = useState(null);
  const [showOpenedCodeModal, setShowOpenedCodeModal] = useState(false);

  useEffect(() => {
    const fetchCodes = async () => {
      const data = await listCodes();
      setCodes(data.data);
    };
    fetchCodes();
  }, []);

  return (
    <AppContext.Provider value={{ codes, toggleShow, setToggleShow, openedCode, showOpenedCodeModal, setShowOpenedCodeModal, setOpenedCode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
