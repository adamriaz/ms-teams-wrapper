import { BaseInputTypes, DateInputProps } from "../../types/message-card-types";

interface IDateInput extends DateInputProps {
    setId(id: string): void;
    setIncludeTime(includeTime: boolean): void;
    setIsRequired(isRequired: boolean): void;
    setTitle(title: string): void;
    setValue(value: string): void;
    get(): DateInputProps;
}

export class DateInput implements IDateInput {
    includeTime?: boolean;
    id: string;
    "@type": BaseInputTypes;
    isRequired?: boolean;
    title: string;
    value: string;


    constructor(id: string, title: string, value: string) {
        this["@type"] = "DateInput"
        this.id = id;
        this.title = title;
        this.value = value;
    }

    setId(id: string): void { this.id = id; }

    setIncludeTime(includeTime: boolean): void { this.includeTime = includeTime; }

    setIsRequired(isRequired: boolean): void { this.isRequired = isRequired; }

    setTitle(title: string): void { this.title = title; }

    setValue(value: string): void { this.value = value; }

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