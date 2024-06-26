import _ from "lodash";
import QrCode from "../models/Qcode.model";
import QRCode from "qrcode";
import { validateURL } from "../validation/validation";
const getHome = async (req, res) => {
  try {
    res.send("Welcome to the QR Code API");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const generateQRCode = async (req, res) => {
  const { title, url } = req.body;

  if (!validateURL(url)) {
    return res.status(400).json({ message: "Invalid URL" });
  }
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url);
    const qrCode = new QrCode({ title, url, qrCodeDataURL });
    await qrCode.save();
    res.status(201).json(qrCode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getQRCodes = async (req, res) => {
  try {
    const qrCodes = await QrCode.find();
    res.json(qrCodes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQRCode = async (req, res) => {
  const { id } = req.params;
  try {
    const qrCode = await QrCode.findById(id);
    if (!qrCode) {
      return res.status(404).json({ message: "QrCode not found" });
    }
    res.json(qrCode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteQRCode = async (req, res) => {
  try {
    const qrCode = await QrCode.findByIdAndRemove(req.params.id);
    if (!qrCode) return res.status(404).send("Qr code not found");
    res.send(qrCode);
  } catch (error) {
    res.status(500).send(error);
  }
};


export {
  getHome,
  generateQRCode,
  getQRCode,
  getQRCodes,
  deleteQRCode,
};
