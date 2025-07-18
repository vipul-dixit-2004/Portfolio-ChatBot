import chatBot from '../chatbot/chatBot.js'
import { v4 as uuidv4 } from 'uuid';

async function test() {
    const testId = uuidv4();
    console.log(testId);
    console.log(await chatBot(testId, "Hello my name is vipul"));
    console.log(await chatBot(testId, "Do you know my name"));
    const testId2 = uuidv4();
    console.log(await chatBot(testId2, "Do you know my name"));

}
test();