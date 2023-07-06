import { describe, expect, it } from "@jest/globals";
import { DateInput } from "../../../../../src/cards/message-card/inputs/date-input";

describe('DateInput class', () => {
    it('should create an instance of DateInput', () => {
        const input = new DateInput("dueDate", "Due Date", "");
        expect(input).toBeDefined();
        expect(input.id).toBe("dueDate");
        expect(input.title).toBe("Due Date");
        expect(input.value).toBe("");
        expect(input["@type"]).toBe("DateInput");
    });

    it('check if get method returns expected values', () => {
        const input = new DateInput("dueDate", "Due Date", "");
        input.id = "issueDate";
        input.title = "Issue Date";
        input.value = "2023-07-04T08:00:00.000Z";
        input.includeTime = true;
        input.isRequired = true;
        expect(input.id).toBe("issueDate");
        expect(input.title).toBe("Issue Date");
        expect(input.value).toBe("2023-07-04T08:00:00.000Z");
        expect(input.includeTime).toBe(true);
        expect(input.isRequired).toBe(true);
        expect(input.toObject()).toStrictEqual({ 
            "@type": "DateInput",
            id: "issueDate",
            title: "Issue Date",
            value: "2023-07-04T08:00:00.000Z",
            includeTime: true,
            isRequired: true
         });
    });
});