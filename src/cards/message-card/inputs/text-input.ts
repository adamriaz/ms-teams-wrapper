import { BaseInputTypes, TextInputProps } from "../../types/message-card-types";

interface ITextInput extends TextInputProps {
    setIsMultiline(isMultiline: boolean): void;
    setMaxLength(maxLength: number): void;
    setID(id: string): void;
    setTitle(title: string): void;
    setValue(value: string): void;
    setIsRequired(isRequired: boolean): void;
    get(): TextInputProps;
}

export class TextInput implements ITextInput {
    isMultiline?: boolean;
    maxLength: number;
    id: string;
    "@type": BaseInputTypes;
    isRequired?: boolean;
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

    setIsMultiline(isMultiline: boolean): void { this.isMultiline = isMultiline; }

    setMaxLength(maxLength: number): void { this.maxLength = maxLength; }

    setID(id: string): void { this.id = id; }

    setTitle(title: string): void { this.title = title; }

    setValue(value: string): void { this.value = value; }

    setIsRequired(isRequired: boolean): void { this.isRequired = isRequired; }

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