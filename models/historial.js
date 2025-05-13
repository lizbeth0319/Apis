/* import mongoose from "mongoose";


const historial = new mongoose.Schema({
    respuesta:{type:String},
});

export default mongoose.model("historial",historial) */

import mongoose from "mongoose";

const historialSchema = new mongoose.Schema(
{
experto: { type: String, required: true }, 
respuesta: { type: String, required: true }
},
{ timestamps: true } 
);

export default mongoose.model("Historial", historialSchema);
