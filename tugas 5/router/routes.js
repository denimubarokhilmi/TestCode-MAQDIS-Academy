import express from "express";
import { hello, sendData, deleteData, deleteDeposit } from "../controllers/routeController.js";
const router = express.Router();

router.get('/hello', hello);
router.post("/send-data", sendData);
router.post('/delete-data', deleteData);
router.post('/delete-deposit', deleteDeposit);

export default router;