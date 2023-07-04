import { describe, expect, it } from "@jest/globals";
import { ActionCardAction } from "../../../../../src/cards/message-card/actions/action-card-action";
import { HttpPostActionHeaderProps, HttpPostActionProps, InputTypes, MultiChoiceInputChoiceProps, MultiChoiceInputProps } from "../../../../../src/cards/types/message-card-types";
import { HttpPostAction } from "../../../../../src/cards/message-card/actions/http-post-action";

describe('ActionCardAction class', () => {
    it('should create an instance of ActionCardAction', () => {
        const actionCardAction = new ActionCardAction("Comment");
        expect(actionCardAction).toBeDefined();
        expect(actionCardAction.name).toBe("Comment");
    });

    it('should set properties and return expected value', () => {
        const actionCardAction = new ActionCardAction("Todo");
        actionCardAction.name = "Todo list";
        
        
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

        const inputTypes: InputTypes[] = [
            {
                id: "todo-list",
                "@type": "MultiChoiceInput",
                isRequired: true,
                title: "todo list",
                value: "",
                isMultiSelect: true,
                choices: MultiChoiceInputChoices,
                style: "expanded"
            }
        ];

        actionCardAction.inputs = inputTypes;
        const postActions: HttpPostActionProps[] = [];
        const postAction = new HttpPostAction("https://www.google.com", "Hello", "test");

        postAction.body = "World";
        postAction.name = "test2";
        postAction.target = "https://www.bing.com";
        postAction.bodyContentType = "application/json";
        const headers: HttpPostActionHeaderProps[] = [];
        headers.push({ name: "CARD-ACTION-STATUS", value: "pending" });
        postAction.headers = headers
        postActions.push(postAction);

        actionCardAction.actions = postActions;

        expect(actionCardAction.name).toBe("Todo list");
        expect(actionCardAction["@type"]).toBe("ActionCard");
        expect(actionCardAction.inputs).toEqual(inputTypes);
        expect(actionCardAction.actions).toEqual(postActions);

        expect(actionCardAction.get()).toStrictEqual({
            name: "Todo list",
            "@type": "ActionCard",
            inputs: inputTypes,
            actions: postActions
        })

    });
});