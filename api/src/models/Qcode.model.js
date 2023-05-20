import mongoose from "mongoose";

const QrCodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 25,
    match: /^[a-zA-Z0-9]*$/,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  QRCode: {
    type: String,
    required: true,
  }
});

export default mongoose.model("QrCode", QrCodeSchema);
