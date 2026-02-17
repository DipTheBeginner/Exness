import express from "express";
import cors from "cors";
import Routes from "./routes";
import dotenv from "dotenv";




dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/health-check", (req, res) => {
  res.status(200).json({ message: "API is healthy" });

});

app.use("/api", Routes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
}).on("error", (err) => {
  console.error(`Server failed to start on port ${PORT}:`, err.message);
});





