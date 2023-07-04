import { describe, expect, it } from "@jest/globals";
import { MultiChoiceInputChoice } from "../../../../../src/cards/message-card/inputs/multi-choice-input-choice";

describe('MultiChoiceInputChoice class', () => {
    it('should create an instance of MultiChoiceInputChoice', () => {
        const input = new MultiChoiceInputChoice("Step 1", "Step 1");
        expect(input).toBeDefined();
        expect(input.display).toEqual("Step 1");
        expect(input.value).toEqual("Step 1");
    });

    it('check if get method returns expected values', () => {
        const input = new MultiChoiceInputChoice("Step 1", "Step 1");
        input.display = "Step 2";
        input.value = "Step 2";
        expect(input.display).toEqual("Step 2");
        expect(input.value).toEqual("Step 2");
        expect(input.get()).toStrictEqual({
            display: "Step 2",
            value: "Step 2"
        });
    });
});