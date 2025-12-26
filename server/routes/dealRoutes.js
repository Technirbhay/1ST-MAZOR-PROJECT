import express from "express";
import protect, { admin } from "../middleware/authMiddleware.js";
import Deal from "../models/Deal.js";

const router = express.Router();

router.post("/", protect, admin, async (req, res) => {
  const deal = await Deal.create(req.body);
  res.json(deal);
});

router.get("/", async (req, res) => {
  const deals = await Deal.find({});
  res.json(deals);
});

export default router;
