import { describe, expect, it } from "@jest/globals";
import { MessageCardSectionFact } from "../../../../src/cards/message-card/message-card-section-fact";

describe('MessageCardSectionFact class', () => {
    it('should create an instance of MessageCardSectionFact', () => {
        const fact = new MessageCardSectionFact("Assignment", "Assignment 1");
        expect(fact).toBeDefined();
        expect(fact.name).toBe("Assignment");
        expect(fact.value).toBe("Assignment 1");
    });

    it('check if get method returns expected values', () => {
        const fact = new MessageCardSectionFact("Assignment", "Assignment 1");
        fact.name = "Board";
        fact.value = "Name of board";
        expect(fact.name).toBe("Board");
        expect(fact.value).toBe("Name of board");
        expect(fact.get()).toStrictEqual({
            name: "Board",
            value: "Name of board"
        });
    });
});