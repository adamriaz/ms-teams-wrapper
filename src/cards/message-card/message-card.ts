import { BaseClass } from "../../utils/base-class";
import { CardTypes, ContextTypes } from "../types/base-card-variation-types";
import { MessageCardProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCard extends MessageCardProps, BaseClass<MessageCardProps> { }

/**
 * @group MessageCard
 * @class MessageCard
 * @description Creates a MessageCard object.
 * @example 
 * An example of a twitter styled card that can be used as a message 
 * ```ts
 * const card = new MessageCard("Random Tweet", "Title", "Some text");
 * card.themeColor = "0078D7";
 * 
 * const sectionOne = new MessageCardSection("**Elon Musk**");
 * sectionOne.activitySubtitle = "@elonmusk - 9/12/2016 at 5:33pm";
 * sectionOne.activityText = "Climate change explained in comic book form by xkcd xkcd.com/1732";
 * sectionOne.activityImage = "https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0.jpg";
 * 
 * const sections: MessageCardSection[] = [sectionOne];
 * card.sections = sections;
 * ```
 */
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