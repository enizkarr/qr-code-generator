import mongoose from "mongoose";

const QrCodeSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'QrCode title is required']
    },
    url:{
        type:String,
        required:[true]
    }
}) 

export default mongoose.model("QrCode", QrCodeSchema)