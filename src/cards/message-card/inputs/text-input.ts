import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, TextInputProps } from "../../types/message-card-types";

interface ITextInput extends TextInputProps, BaseClass<TextInputProps> {}

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