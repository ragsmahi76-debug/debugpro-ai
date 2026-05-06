import express from "express";
import { askAI } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { code } = req.body;

  const result = await askAI(code);

  res.json({ result });
});

export default router;