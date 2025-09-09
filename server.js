import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=${process.env.GNEWS_API_KEY}&lang=en&country=us`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});