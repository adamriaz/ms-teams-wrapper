import { MultiChoiceInputChoiceProps } from "../../types/message-card-types";

interface IMultiChoiceInputChoice extends MultiChoiceInputChoiceProps {
    setDisplay(display: string): void;
    setValue(value: string): void;
    get(): MultiChoiceInputChoiceProps;
}

export class MultiChoiceInputChoice implements IMultiChoiceInputChoice {
    display: string;
    value: string;

    constructor(display: string, value: string) {
        this.display = display;
        this.value = value;
    }

    setDisplay(display: string): void { this.display = display; }

    setValue(value: string): void { this.value = value; }

    get(): MultiChoiceInputChoiceProps {
        return {
            display: this.display,
            value: this.value
        }
    }
}