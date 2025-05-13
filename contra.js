/* import { GoogleGenAI } from "@google/genai";
import "dotenv/config"

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function main() {
    const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        contents: "Actúa como un experto con un pensamiento que sea favorable para los programadores, con un gran respaldo de información comprobada de como la inteligencia artificial no podrá reemplazar la labor de un programador.Donde se reconozcan las capacidades que no lograría una maquina en comparación al pensamiento humano. Defiende estos principales aspectos. (Ten en cuenta que te encontraras en un debate, donde debes iniciar una conversación o defender un punto",
        history: [
        {
            role: "user",
            parts: [{ text: "Hola" }],
        },
        {
            role: "model",
            parts: [{ text: "inicia una coversacion a favor de los programadores en contra de que las IA los van a remplazar  " }],
        },
        ],
    });


    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response 1:", response1.text);

    // const response2 = await chat.sendMessage({
    //     message: "",
    // });
    // console.log("Chat response 2:", response2.text);
    }


const xx=async()=>{
    await main();
}
xx()
export default xx */
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

export default async function generarRespuestaContra() {
const chat = ai.chat({
model: "gemini-2.0-flash",
history: [
{
role: "user",
parts: [{ text: "Hola" }],
},
{
role: "model",
parts: [{ text: "Inicia una conversación a favor de los programadores y en contra de que las IA los reemplazarán." }],
},
],
});

const result = await chat.sendMessage(
"Actúa como un experto que defiende el valor del pensamiento humano frente a las IA. Usa argumentos sólidos sobre cómo la inteligencia artificial no puede reemplazar a los programadores. Estás en un debate, defiende con firmeza el rol humano."
);

return result.text();
}

import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import generarRespuestaAFavor from "./afavor.js";
import generarRespuestaContra from "./contra.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/api/afavor", async (req, res) => {
try {
const respuesta = await generarRespuestaAFavor();
res.json({ experto: "IA", respuesta });
} catch (err) {
res.status(500).json({ error: "Error al generar respuesta AFAVOR" });
}
});

app.get("/api/contra", async (req, res) => {
try {
const respuesta = await generarRespuestaContra();
res.json({ experto: "Humano", respuesta });
} catch (err) {
res.status(500).json({ error: "Error al generar respuesta CONTRA" });
}
});
