import { beforeEach, describe, expect, it } from '@jest/globals';
import { Webhook } from '../../../src/core/webhook';
import { SimpleTextCard } from '../../../src/cards/simple-text-card';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

const mockedAxios = new MockAdapter(axios, { delayResponse: 300 });


describe('Webhook Test', () => {

    beforeEach(() => {
        mockedAxios.resetHistory();
    });

    it('should simulate sending a message to the webhook', async () => {
        const url = "https://[company-name].webhook.office.com/"
        const card = new SimpleTextCard("Hello World");
        const payload = card.toObject()

        mockedAxios.onPost(url, payload).replyOnce(200, {
            data: 1
        });
        const webhook = new Webhook(url, payload);

        const response = await webhook.sendMessage();

        expect(mockedAxios.history.post.length).toBe(1);
        expect(mockedAxios.history.post[0].data).toBe(JSON.stringify(payload));
        expect(response.data).toEqual({ data: 1 })
    });

    it('should simulate error for text or summary', async () => {
        const url = "https://[company-name].webhook.office.com/"
        const payload = {
            data: "test"
        }

        mockedAxios.onPost(url, payload).replyOnce(400, {
            errorMessage: "Summary or Text is required.",
            data: "Request failed with status code 400",
            status: 400
        });
        const webhook = new Webhook(url, payload);

        try {
            await webhook.sendMessage();            
        } catch(error) {
            expect(error.data).toEqual({
                errorMessage: "Summary or Text is required.",
                data: "Request failed with status code 400",
                status: 400
            });
        }
    });
});