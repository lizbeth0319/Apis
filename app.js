/* import express from "express"
import contra from "./contra.js";
import afavor from "./afavor.js";
import mongoose from "mongoose"
import "dotenv/config"
const app= express();

app.use(express.json())
app.use(express.static("public"))

const historial=[];

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

const guardoDiv = document.getElementById('guardo');
const boton = document.createElement('button');

        boton.textContent = "afavor";
        boton.addEventListener("click", () => {
            console.log(afavor);
        })
guardoDiv.appendChild(boton);
 */

// app.js
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import afavor from "./afavor.js";
import contra from "./contra.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const historial = [];

mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error al conectar a MongoDB:", err));

app.get("/api/afavor", (req, res) => {
historial.push({ experto: "afavor", respuesta: afavor });
res.json({ respuesta: afavor });
});

app.get("/api/contra", (req, res) => {
historial.push({ experto: "contra", respuesta: contra });
res.json({ respuesta: contra });
});

app.get("/api/historial", (req, res) => {
res.json(historial);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(🚀 Servidor escuchando en http:
});
