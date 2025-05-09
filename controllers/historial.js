import historial from "../models/historial.js";

const gethistorial = async (req, res) => {
    try {
        const categorias = await Categorias.find();
        res.json({historial});
    } catch (error) {
        res.status(400).json({ msg: "Error al buscar la historial" });
    }
};
export default httpArticulos