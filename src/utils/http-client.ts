import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { JSONType, WebhookResult } from './types';


class HttpClient {
    private _axios: AxiosInstance;

    private _url: string;

    constructor(baseUrl: string) {
        this._url = baseUrl;
        this._axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }

    public async send(payload: JSONType) {
        try {
            const response = await this._axios.post(this._url, payload);
            return this.results(response);
        } catch (error) {
            throw error;
        }

    }

    private results(response: AxiosResponse): WebhookResult {
        return {
            data: response.data
        };
    }
}

export default HttpClient;