import express from "express";
import {getHome, generateQRCode, getQRCodes, getQRCode, deleteQRCode} from "../controllers/qrcode.controller";

const router = express.Router();

router.get("/", getHome);
router.post("/qrcode", generateQRCode);
router.get("/qrcode", getQRCodes);
router.get("/qrcode/:id", getQRCode);
router.delete("/qrcode/:id", deleteQRCode);

export default router;