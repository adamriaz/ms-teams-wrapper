import { SimpleTextCard, Webhook } from "../../src";
import { demoUrl } from "../constants";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function send() {
    try {
        const data = new SimpleTextCard("Hello world!");
        const webook = new Webhook(demoUrl, data);
        const response = await webook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}