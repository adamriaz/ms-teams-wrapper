import { BaseClass } from "../../utils/base-class";
import { CardTypes, ContextTypes } from "../types/base-card-variation-types";
import { MessageCardProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCard extends MessageCardProps, BaseClass<MessageCardProps> { }

export class MessageCard implements IMessageCard {
    readonly ["@type"]: CardTypes;
    readonly ["@context"]: ContextTypes;
    correlationId?: string;
    expectedActors?: string[];
    title: string;
    summary: string;
    text: string;
    themeColor?: string;
    sections?: MessageCardSectionProps[];
    potentialAction?: PotentialActionTypes;

    constructor(summary: string, title: string, text: string) {
        this.summary = summary;
        this.title = title;
        this.text = text;
        this["@type"] = "MessageCard";
        this["@context"] = "http://schema.org/extensions";
    }

    toObject(): MessageCardProps {
        return Object.assign({}, this);
    }
}