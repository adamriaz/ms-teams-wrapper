import { CardTypes, ContextTypes } from "../types/base-card-variation-types";
import { MessageCardProps, MessageCardSectionProps } from "../types/message-card-types";

interface IMessageCard extends MessageCardProps {
    setSummary(summary: string): void;
    setTitle(title: string): void;
    setText(text: string): void;
    setThemeColor(themeColor: string): void;
    setExpectedActors(expectedActors: string[]): void;
    setCorrelationId(correlationId: string): void;
    get(): MessageCardProps;
}

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

    setSummary(summary: string): void { this.summary = summary; }

    setTitle(title: string): void { this.title = title; }

    setText(text: string): void { this.text = text; }

    setSections(sections: MessageCardSectionProps[]): void { this.sections = sections; }

    setThemeColor(themeColor: string): void { this.themeColor = themeColor; }

    setCorrelationId(correlationId: string): void { this.correlationId = correlationId; }

    setExpectedActors(expectedActors: string[]): void { this.expectedActors = expectedActors; }

    get(): MessageCardProps {
        return {
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
    }
}