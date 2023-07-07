import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, DateInputProps } from "../../types/message-card-types";

interface IDateInput extends DateInputProps, BaseClass<DateInputProps> {}

export class DateInput implements IDateInput {
    includeTime?: boolean;
    id: string;
    readonly ["@type"]: BaseInputTypes;
    isRequired?: boolean;
    title: string;
    value: string;


    constructor(id: string, title: string, value: string) {
        this["@type"] = "DateInput"
        this.id = id;
        this.title = title;
        this.value = value;
    }

    toObject(): DateInputProps {
        return Object.assign({}, this);
    }
}