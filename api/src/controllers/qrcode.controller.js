import _ from "lodash";
import QrCode from "../models/Qcode.model";

const getHome = async (req, res) => {
    const code = QrCode(req.body);
    
};

const generateQRCode = async (req, res) => {};

const getQRCode = async (req, res) => {};

const getQRCodes = async (req, res) => {};

const deleteQRCode = async (req, res) => {};
