import HttpClient from "../utils/http-client";
import { JSONType } from "../utils/types";

export class Webhook {

    private _http: HttpClient;
    private _payload: JSONType;

    constructor(url: string, payload: JSONType) {        
        this._http = new HttpClient(url);
        this._payload = payload;
    }

    public async sendMessage() {
        await this._http.send(this._payload);
    }
}
