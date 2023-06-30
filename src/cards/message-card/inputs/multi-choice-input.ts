import { BaseInputTypes, MultiChoiceInputChoiceProps, MultiChoiceInputProps } from "../../types/message-card-types";

interface IMultiChoiceInput extends MultiChoiceInputProps {
    setChoices(choices: MultiChoiceInputChoiceProps[]): void;
    setIsMultiSelect(isMultiSelect: boolean): void;
    setStyle(style: string): void;
    setId(id: string): void;
    setIsRequired(isRequired: boolean): void;
    setTitle(title: string): void;
    setValue(value: string): void;
    get(): MultiChoiceInputProps;
}

export class MultiChoiceInput implements IMultiChoiceInput {
    choices: MultiChoiceInputChoiceProps[];
    isMultiSelect?: boolean;
    style?: string;
    id: string;
    "@type": BaseInputTypes;
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

    setChoices(choices: MultiChoiceInputChoiceProps[]): void { this.choices = choices };

    setIsMultiSelect(isMultiSelect: boolean): void { this.isMultiSelect = isMultiSelect };

    setStyle(style: string): void { this.style = style };

    setId(id: string): void { this.id = id };

    setIsRequired(isRequired: boolean): void { this.isRequired = isRequired };

    setTitle(title: string): void { this.title = title };

    setValue(value: string): void { this.value = value };

    get(): MultiChoiceInputProps {
        return {
            "@type": this["@type"],
            id: this.id,
            title: this.title,
            value: this.value,
            isRequired: this.isRequired,
            isMultiSelect: this.isMultiSelect,
            style: this.style,
            choices: this.choices
        };
    };
}