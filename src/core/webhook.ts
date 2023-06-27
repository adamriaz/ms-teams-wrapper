import HttpClient from "../utils/http-client";
import { JSONType } from "../utils/types";

export class Webhook {

    private http: HttpClient;
    private payload: JSONType;

    constructor(url: string, payload: JSONType) {        
        this.http = new HttpClient(url);
        this.payload = payload;
    }

    public async sendMessage() {
        await this.http.send(this.payload);
    }
}
