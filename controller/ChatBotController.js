import chatBot from '../chatbot/chatBot.js'
export const sendMessage = async (req, res) => {
    const { userId, message } = req.body;
    console.log(req.body);
    if (!userId || message.length <= 0)
        return res.status(400).json({ status: false, message: "Error with body" });

    try {
        const response = await chatBot(userId, message);
        res.status(200).json({ status: true, message: response });
    } catch (e) {
        res.status(400).json({ status: false, message: e })
    }
}

