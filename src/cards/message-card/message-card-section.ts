import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionFactProps, MessageCardSectionImageProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCardSection extends MessageCardSectionProps, BaseClass<MessageCardSectionProps> { }

export class MessageCardSection implements IMessageCardSection {
    title: string;
    startGroup?: boolean;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    activityImage?: string;
    heroImage?: MessageCardSectionImageProps;
    text?: string;
    facts?: MessageCardSectionFactProps[];
    images?: MessageCardSectionImageProps[];
    potentialAction?: PotentialActionTypes;

    constructor(title: string) {
        this.title = title;
    }

    toObject(): MessageCardSectionProps {
        return Object.assign({}, this);
    }

}