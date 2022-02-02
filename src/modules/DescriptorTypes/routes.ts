import { DescriptorType } from "@entities/DescriptorType";
import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {
  const data = await DescriptorType.find();

  res.json(data);
});

router.get("/:descriptorId", async (req, res) => {
  const data = await DescriptorType.findOne(req.params.descriptorId, {
    relations: ["values"],
  });

  res.json(data);
});

export default router;
