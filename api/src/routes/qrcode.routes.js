import express from "express";
import {getHome, generateQRCode, getQRCodes, getQRCode, deleteQRCode, downloadCode} from "../controllers/qrcode.controller";

const router = express.Router();

router.get("/", getHome);
router.post("/qrcode", generateQRCode);
router.get("/qrcode", getQRCodes);
router.get("/qrcode/:id", getQRCode);
router.get("/qrcode/:id", downloadCode);
router.delete("/qrcode/:id", deleteQRCode);

export default router;