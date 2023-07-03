import { MultiChoiceInputChoiceProps } from "../../types/message-card-types";

interface IMultiChoiceInputChoice extends MultiChoiceInputChoiceProps {
    get(): MultiChoiceInputChoiceProps;
}

export class MultiChoiceInputChoice implements IMultiChoiceInputChoice {
    private _display: string;
    private _value: string;

    constructor(display: string, value: string) {
        this._display = display;
        this._value = value;
    }

    set display(display: string) { this._display = display; }
    get display(): string { return this._display; }

    set value(value: string) { this._value = value; }
    get value(): string { return this._value; }

    get(): MultiChoiceInputChoiceProps {
        return {
            display: this.display,
            value: this.value
        }
    }
}