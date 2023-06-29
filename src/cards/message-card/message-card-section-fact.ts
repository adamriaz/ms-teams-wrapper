import { IMessageCardSectionFact } from "../types/message-card-types";

export class MessageCardSectionFact implements IMessageCardSectionFact {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

}