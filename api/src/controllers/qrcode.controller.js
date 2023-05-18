import _ from "lodash";
import QrCode from "../models/Qcode.model";
import QRCode from "qrcode";
import path from "path";
import fs from "fs"

const getHome = async (req, res) => {
  try {
    res.send("Welcome to the QR Code API");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const generateQRCode = async (req, res) => {
  const { title, url } = req.body;

  try {
    const qrCode = new QrCode({ title, url });
    await qrCode.save();
    const {_id} = qrCode
    //
    const qrCodeDataURL = await QRCode.toDataURL(url);
    // console.log(await QRCode.toDataURL(url))
    console.log(`this is id${qrCode._id}.png`)

    const filename = `${qrCode._id}.png`;
    const filePath = path.join("../../qr-code/", filename);
    console.log(`this is id` , filePath)
    await fs.promises.writeFile(
      filePath,
      qrCodeDataURL.split(",")[1],
      "base64"
    );

    qrCode.filename = filename;
    await qrCode.save();
    //
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

export { getHome, generateQRCode, getQRCode, getQRCodes, deleteQRCode };
