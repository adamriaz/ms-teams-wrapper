import { describe, expect, it } from "@jest/globals";
import { MultiChoiceInput } from "../../../../../src/cards/message-card/inputs/multi-choice-input";
import { MultiChoiceInputChoiceProps } from "../../../../../src/cards/types/message-card-types";

describe('MultiChoiceInput class', () => {
    it('should create an instance of MultiChoiceInput', () => {
        const MultiChoiceInputChoices: MultiChoiceInputChoiceProps[] = [
            {
                display: "Step 1",
                value: "Step 1"
            },
            {
                display: "Step 2",
                value: "Step 2"
            },
            {
                display: "Step 3",
                value: "Step 3"
            }
        ];


        const input = new MultiChoiceInput("todo-list", "todo list", "", MultiChoiceInputChoices);
        expect(input).toBeDefined();
        expect(input.id).toBe("todo-list");
        expect(input.title).toBe("todo list");
        expect(input.value).toBe("");
        expect(input.choices).toEqual(MultiChoiceInputChoices);
        expect(input["@type"]).toBe("MultiChoiceInput");

    });

    it('check if get method returns expected values', () => {
        const MultiChoiceInputChoices: MultiChoiceInputChoiceProps[] = [
            {
                display: "Step 1",
                value: "Step 1"
            },
            {
                display: "Step 2",
                value: "Step 2"
            },
            {
                display: "Step 3",
                value: "Step 3"
            }
        ];


        const input = new MultiChoiceInput("todo-list", "todo list", "", MultiChoiceInputChoices);
        input.id = "task-list";
        input.title = "task list";
        input.value = "";
        input.isMultiSelect = true;
        input.isRequired = true;
        input.style = "expanded";

        const UpdatedMultiChoiceInputChoices: MultiChoiceInputChoiceProps[] = [
            {
                display: "Get milk",
                value: "Get milk"
            },
            {
                display: "Clean garden",
                value: "Clean garden"
            },
            {
                display: "Test js library",
                value: "Test js library"
            }
        ]
        input.choices = UpdatedMultiChoiceInputChoices;
        expect(input.id).toBe("task-list");
        expect(input.title).toBe("task list");
        expect(input.value).toBe("");
        expect(input.isMultiSelect).toBe(true);
        expect(input.isRequired).toBe(true);
        expect(input.style).toBe("expanded");
        expect(input.choices).toEqual(UpdatedMultiChoiceInputChoices);
        expect(input.toObject()).toStrictEqual({
            id: "task-list",
            "@type": "MultiChoiceInput",
            title: "task list",
            value: "",
            isMultiSelect: true,
            isRequired: true,
            style: "expanded",
            choices: UpdatedMultiChoiceInputChoices
        });
    });
});