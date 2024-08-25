import express, { json } from "express";
import "dotenv/config";
import routes from "./routes/Router.js";
import bodyParser from "body-parser";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(bodyParser.json())
app.use(routes)

app.get("/", (req, res) => {
return res.send("Hello from server");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
