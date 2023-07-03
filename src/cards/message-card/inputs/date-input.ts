import { BaseInputTypes, DateInputProps } from "../../types/message-card-types";

interface IDateInput extends DateInputProps {
    get(): DateInputProps;
}

export class DateInput implements IDateInput {
    private _includeTime?: boolean;
    private _id: string;
    private _type: BaseInputTypes;
    private _isRequired: boolean;
    private _title: string;
    private _value: string;


    constructor(id: string, title: string, value: string) {
        this._type = "DateInput"
        this._id = id;
        this._title = title;
        this._value = value;
    }

    set id(id: string) { this._id = id; }
    get id(): string { return this._id; }    

    set includeTime(includeTime: boolean) { this._includeTime = includeTime; }
    get includeTime(): boolean { return this._includeTime; }

    set isRequired(isRequired: boolean) { this._isRequired = isRequired; }
    get isRequired(): boolean { return this._isRequired; }

    set title(title: string) { this._title = title; }
    get title(): string { return this._title; }

    set value(value: string) { this._value = value; }
    get value(): string { return this._value; }

    get ["@type"](): BaseInputTypes { return this._type; }

    get(): DateInputProps {
        return {
            "@type": this["@type"],
            id: this.id,
            includeTime: this.includeTime,
            isRequired: this.isRequired,
            title: this.title,
            value: this.value
        };
    }
}