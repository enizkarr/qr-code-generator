import express from "express";
import ctrl from "../controllers/qrcode.controller";

const router = express.Router();

router.get("/", ctrl.getHome);
router.post("/qrcode", ctrl.generateQRCode);
router.get("/qrcode", ctrl.getQRCodes);
router.get("/qrcode/:id", ctrl.getQRCode);
router.delete("/qrcode/:id", ctrl.deleteQRCode);

export default router;