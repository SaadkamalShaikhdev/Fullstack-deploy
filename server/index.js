import express from "express";
import cors from "cors";
const app = express()
const port = 4000

app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "http://72.61.114.23:5173",   // production frontend
    "http://72.61.114.23:4000"    // NOT /api/message
  ],
  credentials: true,
}));
app.get('/api/message', (req, res) => {
  res.json({message: "Hello from Saadkamal Server"})
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})
