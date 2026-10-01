import express from "express";
import subjectRouter from "./routes/subjects.js";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();

if (!process.env.FRONTEND_URL) throw new Error("FRONTEND_URL is not defined in the environment variables.");

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
}))

app.use("/api/subjects", subjectRouter);

app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${req.method} ${req.url}`);

  next();
});

app.get("/", (req, res) => {
  res.send("API is working.");
});

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
