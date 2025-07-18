const userChatHistories = new Map();
const getUser = (model, userId) => {
    if (!userChatHistories.has(userId)) {
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: `You are a helpful chatbot. Talk to the user with ID: ${userId}.` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Sure! How can I help you today?" }],
                },
            ],
        });
        userChatHistories.set(userId, chat);
    }
    return userChatHistories.get(userId);
}

export default getUser;