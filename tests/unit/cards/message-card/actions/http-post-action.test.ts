import { describe, expect, it } from "@jest/globals";
import { HttpPostAction } from "../../../../../src/cards/message-card/actions/http-post-action";
import { HttpPostActionHeaderProps } from "../../../../../src/cards/types/message-card-types";

describe('HttpPostAction class', () => {

    it('should create an instance of HttpPostAction', () => {
        const action = new HttpPostAction("https://www.google.com", "Hello", "test");
        expect(action).toBeDefined();
        expect(action["@type"]).toEqual("HttpPOST");
        expect(action.body).toEqual("Hello");
        expect(action.name).toEqual("test");
        expect(action.target).toEqual("https://www.google.com");
    });

    it('should set properties and return expected value', () => {
        const action = new HttpPostAction("https://www.google.com", "Hello", "test");

        action.body = "World";
        action.name = "test2";
        action.target = "https://www.bing.com";
        action.bodyContentType = "application/json";
        const headers: HttpPostActionHeaderProps[] = [];
        headers.push({ name: "CARD-ACTION-STATUS", value: "pending" });
        action.headers = headers

        expect(action.body).toEqual("World");
        expect(action.name).toEqual("test2");
        expect(action.target).toEqual("https://www.bing.com");
        expect(action.bodyContentType).toEqual("application/json");
        expect(action.headers).toEqual(headers);
        expect(action.get()).toEqual({
            "@type": "HttpPOST",
            body: "World",
            bodyContentType: "application/json",
            headers,
            target: "https://www.bing.com",
            name: "test2"
        });

    });
});