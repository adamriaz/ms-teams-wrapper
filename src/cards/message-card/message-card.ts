import { CardTypes, ContextTypes } from "../types/base-card-variation-types";
import { MessageCardProps, MessageCardSectionProps } from "../types/message-card-types";

interface IMessageCard extends MessageCardProps {
    get(): MessageCardProps;
}

export class MessageCard implements IMessageCard {
    private _type: CardTypes;
    private _context: ContextTypes;
    private _correlationId?: string;
    private _expectedActors?: string[];
    private _title: string;
    private _summary: string;
    private _text: string;
    private _themeColor?: string;
    private _sections?: MessageCardSectionProps[];

    constructor(summary: string, title: string, text: string) {
        this._summary = summary;
        this._title = title;
        this._text = text;
        this._type = "MessageCard";
        this._context = "http://schema.org/extensions";
    }

    set summary(summary: string) { this._summary = summary; }
    get summary() { return this._summary; }

    set title(title: string) { this._title = title; }
    get title() { return this._title; }

    set text(text: string) { this._text = text; }
    get text() { return this._text; }

    set sections(sections: MessageCardSectionProps[]) { this._sections = sections; }
    get sections() { return this._sections; }

    set themeColor(themeColor: string) { this._themeColor = themeColor; }
    get themeColor() { return this._themeColor; }

    set correlationId(correlationId: string) { this._correlationId = correlationId; }
    get correlationId() { return this._correlationId; }

    set expectedActors(expectedActors: string[]) { this._expectedActors = expectedActors; }
    get expectedActors() { return this._expectedActors; }

    get ["@type"]() { return this._type; }
    get ["@context"]() { return this._context; }

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