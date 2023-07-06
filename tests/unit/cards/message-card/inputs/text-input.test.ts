import { describe, expect, it } from "@jest/globals";
import { TextInput } from "../../../../../src/cards/message-card/inputs/text-input";

describe('TextInput class', () => {
    it('should create an instance of TextInput', () => {
        const input = new TextInput(true, 250, "message", true, "Enter a message", "");
        expect(input).toBeDefined();
        expect(input.isMultiline).toBe(true);
        expect(input.maxLength).toBe(250);
        expect(input.id).toBe("message");
        expect(input.isRequired).toBe(true);
        expect(input.title).toBe("Enter a message");
        expect(input.value).toBe("");
        expect(input["@type"]).toBe("TextInput");

    });

    it('check if get method returns expected values', () => {
        const input = new TextInput(true, 250, "message", true, "Enter a message", "");
        input.id = "name";
        input.title = "Enter your name";
        input.value = "";
        input.isRequired = false;
        input.isMultiline = false;
        input.maxLength = 100;
        expect(input.id).toBe("name");
        expect(input.title).toBe("Enter your name");
        expect(input.value).toBe("");
        expect(input.isRequired).toBe(false);
        expect(input.isMultiline).toBe(false);
        expect(input.maxLength).toBe(100);
        
        expect(input.toObject()).toStrictEqual({
            "@type": "TextInput",
            id: "name",
            isMultiline: false,
            maxLength: 100,
            isRequired: false,
            title: "Enter your name",
            value: ""
        });
    });
});