import { BaseInputTypes, TextInputProps } from "../../types/message-card-types";

interface ITextInput extends TextInputProps {
    get(): TextInputProps;
}

export class TextInput implements ITextInput {
    private _isMultiline: boolean;
    private _maxLength: number;
    private _id: string;
    private _type: BaseInputTypes;
    private _isRequired: boolean;
    private _title: string;
    private _value: string;

    constructor(isMultiline: boolean, maxLength: number, id: string, isRequired: boolean, title: string, value: string) {
        this._isMultiline = isMultiline;
        this._maxLength = maxLength;
        this._id = id;
        this._isRequired = isRequired;
        this._title = title;
        this._value = value;
        this._type = "TextInput"
    }

    set isMultiline(isMultiline: boolean) { this._isMultiline = isMultiline; }
    get isMultiline(): boolean { return this._isMultiline; }

    set maxLength(maxLength: number) { this._maxLength = maxLength; }
    get maxLength(): number { return this._maxLength; }

    set id(id: string) { this._id = id; }
    get id(): string { return this._id; }

    set title(title: string) { this._title = title; }
    get title(): string { return this._title; }

    set value(value: string) { this._value = value; }
    get value(): string { return this._value; }

    set isRequired(isRequired: boolean) { this._isRequired = isRequired; }
    get isRequired(): boolean { return this._isRequired; }

    get ["@type"](): BaseInputTypes { return this._type; }

    get(): TextInputProps {
        return {
            "@type": this["@type"],
            isMultiline: this.isMultiline,
            maxLength: this.maxLength,
            id: this.id,
            isRequired: this.isRequired,
            title: this.title,
            value: this.value
        };
    }
}