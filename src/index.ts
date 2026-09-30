import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();

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
