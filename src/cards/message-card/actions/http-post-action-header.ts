import { HttpPostActionHeaderProps } from "../../types/message-card-types";

interface IHttpPostActionHeader extends HttpPostActionHeaderProps {
    get(): HttpPostActionHeaderProps;
}

export class HttpPostActionHeader implements IHttpPostActionHeader {
    private _name: string;
    private _value: string;

    constructor(name: string, value: string) {
        this._name = name;
        this._value = value;
    }

    set name(name: string) { this._name = name; }
    get name(): string { return this._name; }

    set value(value: string) { this._value = value; }
    get value(): string { return this._value; }

    get(): HttpPostActionHeaderProps {
        return {
            name: this.name,
            value: this.value
        };
    }
}
