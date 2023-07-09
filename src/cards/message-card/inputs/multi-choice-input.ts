import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, MultiChoiceInputChoiceProps, MultiChoiceInputProps } from "../../types/message-card-types";

interface IMultiChoiceInput extends MultiChoiceInputProps, BaseClass<MultiChoiceInputProps> {}

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