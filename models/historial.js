import mongoose from "mongoose";


const historial = new mongoose.Schema({
    respuesta:{type:String},
});

export default mongoose.model("historial",historial)