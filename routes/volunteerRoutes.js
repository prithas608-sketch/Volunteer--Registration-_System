const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/", async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
});

router.delete("/:id", async (req, res) => {
  await Volunteer.findByIdAndDelete(req.params.id);
  res.json({ message: "Volunteer Deleted" });
});

module.exports = router;