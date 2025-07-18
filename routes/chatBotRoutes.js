import express from 'express'
import * as ChatBotController from '../controller/ChatBotController.js';
const router = express.Router();

router.post("/", ChatBotController.sendMessage)

router.get("/", (req, res) => {
    res.json({ status: true });
})


export default router;

