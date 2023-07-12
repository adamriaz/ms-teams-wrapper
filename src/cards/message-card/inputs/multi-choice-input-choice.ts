import { BaseClass } from "../../../utils/base-class";
import { MultiChoiceInputChoiceProps } from "../../types/message-card-types";

interface IMultiChoiceInputChoice extends MultiChoiceInputChoiceProps, BaseClass<MultiChoiceInputChoiceProps> {}
/**
 * @group MessageCard.Inputs
 * @description Represents a choice in a {@link MultiChoiceInput}.
 * @example
 * const choice1 = new MultiChoiceInputChoice("Choice 1", "Choice 1");
 * const choice2 = new MultiChoiceInputChoice("Choice 2", "Choice 2");
 * const choices: MultiChoiceInputChoice[] = [choice1, choice2];

 * const multiChoiceInput = new MultiChoiceInput("id", "Pick as list", "", choices)
 * const multiChoiceInputs: MultiChoiceInput[] = [multiChoiceInput];
 */
export class MultiChoiceInputChoice implements IMultiChoiceInputChoice {
    display: string;
    value: string;

    constructor(display: string, value: string) {
        this.display = display;
        this.value = value;
    }

    toObject(): MultiChoiceInputChoiceProps {
        return Object.assign({}, this);
    }
}