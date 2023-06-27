import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { JSONType, WebhookResult } from './types';


class HttpClient {
    private axios: AxiosInstance;

    private url: string;

    constructor(baseUrl: string) {
        this.url = baseUrl;
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }

    public async send(payload: JSONType) {
        try {
            const response = await this.axios.post(this.url, payload);
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