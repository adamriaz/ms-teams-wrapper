import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, MultiChoiceInputChoiceProps, MultiChoiceInputProps } from "../../types/message-card-types";

interface IMultiChoiceInput extends MultiChoiceInputProps, BaseClass<MultiChoiceInputProps> { }
/**
 * @group MessageCard.Inputs
 * @description Multi-choice input for {@link MessageCard}. This requires the {@link ActionCardAction} and {@link HttpPostAction} instance.
 * @example
 * const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet");
 * const moveAction = new ActionCardAction("Move");
 * const moveActionOK = new HttpPostAction("https://trello.com", "ok");
 * moveActionOK.body = "body of post request";
 * const moveActionHttpPostActions: HttpPostAction[] = [moveActionOK];
 * moveAction.actions = moveActionHttpPostActions;

 * const choice1 = new MultiChoiceInputChoice("Choice 1", "Choice 1");
 * const choice2 = new MultiChoiceInputChoice("Choice 2", "Choice 2");
 * const choices: MultiChoiceInputChoice[] = [choice1, choice2];

 * const multiChoiceInput = new MultiChoiceInput("id", "Pick as list", "", choices)
 * const multiChoiceInputs: MultiChoiceInput[] = [multiChoiceInput];
 * moveAction.inputs = multiChoiceInputs;
 * 
 * const potentialActions: ActionCardAction[] = [moveAction];
 * card.potentialAction = potentialActions;
 */
export class MultiChoiceInput implements IMultiChoiceInput {
    choices: MultiChoiceInputChoiceProps[];
    isMultiSelect?: boolean;
    style?: string;
    id: string;
    readonly ["@type"]: BaseInputTypes;
    isRequired?: boolean;
    title: string;
    value: string;

    constructor(id: string, title: string, value: string, choices: MultiChoiceInputChoiceProps[]) {
        this.id = id;
        this.title = title;
        this.value = value;
        this.choices = choices;
        this["@type"] = "MultiChoiceInput";
    }

    toObject(): MultiChoiceInputProps {
        return Object.assign({}, this);
    }
}