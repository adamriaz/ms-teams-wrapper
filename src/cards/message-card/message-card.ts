import { CardTypes, ContextTypes } from "../types/base-card-variation-types";
import { IMessageCard, IMessageCardSection, MessageCardProps, MessageCardSectionProps } from "../types/message-card-types";
import { MessageCardSection } from "./message-card-section";

export class MessageCard implements IMessageCard {

    "@type": CardTypes;
    "@context": ContextTypes;
    correlationId?: string;
    expectedActors?: string[];
    title: string;
    summary: string;
    text: string;
    themeColor?: string;
    sections?: MessageCardSectionProps[];

    constructor(summary: string, title: string, text: string) {
        this.summary = summary;
        this.title = title;
        this.text = text;
        this["@type"] = "MessageCard";
        this["@context"] = "http://schema.org/extensions";
    }

    setSections(sections: MessageCardSectionProps[]) { this.sections = sections; }

    setThemeColor(themeColor: string) { this.themeColor = themeColor; }

    setCorrelationId(correlationId: string) { this.correlationId = correlationId; }

    setExpectedActors(expectedActors: string[]) { this.expectedActors = expectedActors; }

    build(): MessageCardProps {
        const card: MessageCardProps = {
            "@type": this["@type"],
            "@context": this["@context"],
            correlationId: this.correlationId,
            expectedActors: this.expectedActors,
            title: this.title,
            summary: this.summary,
            text: this.text,
            themeColor: this.themeColor,
            sections: this.sections
        }
        return card;
    }
}