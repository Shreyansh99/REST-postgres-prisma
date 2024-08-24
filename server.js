import express from "express";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.send("Hello from server");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
