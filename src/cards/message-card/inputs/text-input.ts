import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, TextInputProps } from "../../types/message-card-types";

interface ITextInput extends TextInputProps, BaseClass<TextInputProps> {}
/**
 * @group MessageCard.Inputs
 * @description Text input for {@link MessageCard}. This requires the {@link ActionCardAction} and {@link HttpPostAction} instance.
 * @example
 * const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet");
 * const addCommentAction = new ActionCardAction("Add comment");
 * const addCommentActionOK = new HttpPostAction("https://trello.com", "ok");
 * addCommentActionOK.body = "body of post request";
 * const addCommentActionHttpPostActions: HttpPostAction[] = [addCommentActionOK];
 * addCommentAction.actions = addCommentActionHttpPostActions;

 * const addCommentTextInput = new TextInput(true, 200, "comment", true, "Enter a comment", "");
 * const addCommentTextInputs: TextInput[] = [addCommentTextInput];
 * addCommentAction.inputs = addCommentTextInputs;
 * moveAction.inputs = multiChoiceInputs;
 * 
 * const potentialActions: ActionCardAction[] = [moveAction];
 * card.potentialAction = potentialActions;
 */
export class TextInput implements ITextInput {
    isMultiline: boolean;
    maxLength: number;
    id: string;
    readonly ["@type"]: BaseInputTypes;
    isRequired: boolean;
    title: string;
    value: string;

    constructor(isMultiline: boolean, maxLength: number, id: string, isRequired: boolean, title: string, value: string) {
        this.isMultiline = isMultiline;
        this.maxLength = maxLength;
        this.id = id;
        this.isRequired = isRequired;
        this.title = title;
        this.value = value;
        this["@type"] = "TextInput"
    }

    toObject(): TextInputProps {
        return Object.assign({}, this);
    }
}