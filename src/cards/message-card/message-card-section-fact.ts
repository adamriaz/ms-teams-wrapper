import { MessageCardSectionFactProps } from "../types/message-card-types";

interface IMessageCardSectionFact extends MessageCardSectionFactProps{ 
    setName(name: string): void; 
    setValue(value: string): void;
    get(): MessageCardSectionFactProps;
}

export class MessageCardSectionFact implements IMessageCardSectionFact {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    setName(name: string): void { this.name = name }

    setValue(value: string): void { this.value = value }

    get(): MessageCardSectionFactProps { 
        return {
            name: this.name,
            value: this.value
        }    
    }
}