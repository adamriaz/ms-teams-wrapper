import { MessageCardSectionFactProps } from "../types/message-card-types";

interface IMessageCardSectionFact extends MessageCardSectionFactProps {
    get(): MessageCardSectionFactProps;
}

export class MessageCardSectionFact implements IMessageCardSectionFact {
    private _name: string;
    private _value: string;

    constructor(name: string, value: string) {
        this._name = name;
        this._value = value;
    }

    set name(name: string) { this._name = name }
    get name(): string { return this._name }

    set value(value: string) { this._value = value }
    get value(): string { return this._value }

    get(): MessageCardSectionFactProps {
        return {
            name: this.name,
            value: this.value
        }
    }
}