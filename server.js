require("dotenv").config();


const mongoose = require("mongoose");


const volunteerRoutes = require("./routes/volunteerRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/volunteers", volunteerRoutes);
app.use("/api/auth", authRoutes);




const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
