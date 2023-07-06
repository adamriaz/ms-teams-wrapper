import HttpClient from "../utils/http-client";
import { WebhookRequest, WebhookResult } from "../utils/types";

export class Webhook {

    private _http: HttpClient;
    private _payload: WebhookRequest;

    constructor(url: string, payload: WebhookRequest) {        
        this._http = new HttpClient(url);
        this._payload = payload;
    }

    public async sendMessage(): Promise<WebhookResult> {
        return await this._http.send(this._payload);
    }
}
