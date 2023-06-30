import { HttpPostActionHeaderProps } from "../../types/message-card-types";

interface IHttpPostActionHeader extends HttpPostActionHeaderProps {
    setName(name: string): void;
    setValue(value: string): void;
}

export class HttpPostActionHeader implements IHttpPostActionHeader {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    setName(name: string): void { this.name = name; }

    setValue(value: string): void { this.value = value; }
}
