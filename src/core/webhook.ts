import HttpClient from "../utils/http-client";
import { WebhookRequest, WebhookResult } from "../utils/types";
/**
 * @group Core
 * 
 */
export class Webhook {
    /**
     * @ignore
     */
    private _http: HttpClient;
    private _payload: WebhookRequest;

    /**
     * 
     * @param url The urls of the webhook
     * @param payload The payload to send to the webhook
     */
    constructor(url: string, payload: WebhookRequest) {        
        this._http = new HttpClient(url);
        this._payload = payload;
    }

    /**
     * 
     * @returns A promise that resolves to the result of the webhook call
     */
    public async sendMessage(): Promise<WebhookResult> {
        return await this._http.send(this._payload);
    }
}
