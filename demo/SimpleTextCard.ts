import { SimpleTextCard, Webhook } from "../src";

async function send() {
    try {
        const url = "https://[account-name].webhook.office.com"
        const data = new SimpleTextCard("Hello world!");
        const webook = new Webhook(url, data);
        const response = await webook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}