import express from "express";
import sellerController from "../controller/seller.js";
import verifyToken from "../middleware/auth.js";

const router=express.Router();

router.post("/sellers", verifyToken, sellerController.addSeller);

export default router;