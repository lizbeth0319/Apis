import express from "express"
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