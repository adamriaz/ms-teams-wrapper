import { BaseInputTypes, MultiChoiceInputChoiceProps, MultiChoiceInputProps } from "../../types/message-card-types";

interface IMultiChoiceInput extends MultiChoiceInputProps {
    get(): MultiChoiceInputProps;
}

export class MultiChoiceInput implements IMultiChoiceInput {
    private _choices: MultiChoiceInputChoiceProps[];
    private _isMultiSelect: boolean;
    private _style: string;
    private _id: string;
    private _type: BaseInputTypes;
    private _isRequired: boolean;
    private _title: string;
    private _value: string;

    constructor(id: string, title: string, value: string, choices: MultiChoiceInputChoiceProps[]) {
        this._id = id;
        this._title = title;
        this._value = value;
        this._choices = choices;
        this._type = "MultiChoiceInput";
    }

    set choices(choices: MultiChoiceInputChoiceProps[]) { this._choices = choices };
    get choices(): MultiChoiceInputChoiceProps[] { return this._choices };

    set isMultiSelect(isMultiSelect: boolean) { this._isMultiSelect = isMultiSelect };
    get isMultiSelect(): boolean { return this._isMultiSelect };

    set style(style: string) { this._style = style };
    get style(): string { return this._style };

    set id(id: string) { this._id = id };
    get id(): string { return this._id };

    set isRequired(isRequired: boolean) { this._isRequired = isRequired };
    get isRequired(): boolean { return this._isRequired };

    set title(title: string) { this._title = title };
    get title(): string { return this._title };

    set value(value: string) { this._value = value };
    get value(): string { return this._value };

    get ["@type"]() { return this._type };

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