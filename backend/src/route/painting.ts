import express from "express";
import verifyToken from "../middleware/auth.js";
import paintingController from "../controller/painting.js";

const router=express.Router();

router.post("/paintings", verifyToken, paintingController.addPainting);
router.post("/painting", verifyToken, paintingController.getPainting);

export default router;