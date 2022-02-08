import { Parameter } from "@entities/Parameters";
import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {
  const data = await Parameter.find();

  res.json(data);
});

router.get("/:descriptorId", async (req, res) => {
  const data = await Parameter.findOne(req.params.descriptorId, {
    relations: ["values"],
  });

  res.json(data);
});

export default router;
