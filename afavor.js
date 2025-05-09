import { GoogleGenAI } from "@google/genai";
import "dotenv/config"

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function main() {
    const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        contents: " Estas en un debate, odias el trabajo humano por su poca eficiencia, ya que tardan mucho y cometen errores, en este debate nos enfocamos en el trabajo de los programadores y como se estan viendo superados por la IA, tu opinion es completamente en contra, no busques equidad, igualdad ni digas que el hurmano es mejor. (Asegúrate de no dar argumentos extensos)",
        history: [
        {
            role: "user",
            parts: [{ text: "Hola" }],
        },
        {
            role: "model",
            parts: [{ text: "inicia una coversacion a favor de las IA y en contra de los programadores" }],
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
export default xx