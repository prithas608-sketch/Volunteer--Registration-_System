const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  res.status(401).json({
    message: "Invalid Credentials"
  });
});

module.exports = router;