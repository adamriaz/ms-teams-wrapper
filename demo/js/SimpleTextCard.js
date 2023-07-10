/* eslint-disable @typescript-eslint/no-var-requires */
const { SimpleTextCard, Webhook } = require("../../src");
const { demoUrl } = require("../constants");


// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function send() {
    try {
        const data = new SimpleTextCard("Hello world!");
        const webhook = new Webhook(demoUrl, data);
        const response = await webhook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}