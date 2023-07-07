import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { WebhookError, WebhookRequest, WebhookResult } from './types';


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

    public async send(payload: WebhookRequest): Promise<WebhookResult> {
        try {
            const response = await this._axios.post(this._url, payload);
            return this.results(response);
        } catch (error) {
            throw this.error(error);
        }
    }

    private results(response: AxiosResponse): WebhookResult {
        return {
            data: response.data
        };
    }

    private error(error: any): WebhookError {
        const responseError = {
            errorMessage: error.message,
            data: error.response.data,
            status: error.response.status
        };
        return responseError;
    }
}

export default HttpClient;