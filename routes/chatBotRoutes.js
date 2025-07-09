import express from 'express'

const router = express.Router();

router.post("/", (req, res) => {
    res.json(res.body);
})

router.get("/", (req, res) => {
    res.json({ status: true });
})





export default router;

