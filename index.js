import express from 'express'
import chatBotRoutes from './routes/chatBotRoutes.js'
import cors from 'cors'
const app = express()

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


//Routes setup
app.get("/", (req, res) => {
    res.status(200).json({ status: true });
})

app.use("/api/chat/", chatBotRoutes);


app.listen(PORT, () => console.log(`> Server Running at port: ${PORT}`));

