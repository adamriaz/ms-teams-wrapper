import { BaseClass } from "../../../utils/base-class";
import { MultiChoiceInputChoiceProps } from "../../types/message-card-types";

interface IMultiChoiceInputChoice extends MultiChoiceInputChoiceProps, BaseClass<MultiChoiceInputChoiceProps> {}
/**
 * @group MessageCard.Inputs
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