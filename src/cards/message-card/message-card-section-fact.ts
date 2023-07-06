import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionFactProps } from "../types/message-card-types";

interface IMessageCardSectionFact extends MessageCardSectionFactProps, BaseClass<MessageCardSectionFactProps> {}

export class MessageCardSectionFact implements IMessageCardSectionFact {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    toObject(): MessageCardSectionFactProps {
        return Object.assign({}, this);
    }
    
}