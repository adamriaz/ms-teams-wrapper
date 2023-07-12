import { SimpleTextCard, Webhook } from "../../src";
import { demoUrl } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sendSimpleTextCard() {
    try {
        const data = new SimpleTextCard("Hello world!");
        const webhook = new Webhook(demoUrl, data);
        const response = await webhook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}