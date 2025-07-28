// index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Permitir peticiones desde cualquier origen
app.use(cors());

app.get("/api/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://potterhead-api.vercel.app/api/characters"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
