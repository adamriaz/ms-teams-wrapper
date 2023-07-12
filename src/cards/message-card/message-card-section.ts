import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionFactProps, MessageCardSectionImageProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCardSection extends MessageCardSectionProps, BaseClass<MessageCardSectionProps> { }

/**
 * @group MessageCard
 * @description MessageCardSection instance used as {@link MessageCard.sections | sections} for {@link MessageCard}.
 * 
 * @example 
 * An example of a twitter styled card that can be used as a message with two sections
 * ```ts
 * const card = new MessageCard("Random Tweet", "Title", "Some text");
 * card.themeColor = "0078D7";
 * 
 * const sectionOne = new MessageCardSection("**Elon Musk**");
 * sectionOne.activitySubtitle = "@elonmusk - 9/12/2016 at 5:33pm";
 * sectionOne.activityText = "Climate change explained in comic book form by xkcd xkcd.com/1732";
 * sectionOne.activityImage = "https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0.jpg";
 * 
 * const sectionTwo = new MessageCardSection("**Mark Knopfler**");
 * sectionTwo.activitySubtitle = "@MarkKnopfler - 9/12/2016 at 1:12pm";
 * sectionTwo.activityImage = "https://pbs.twimg.com/profile_images/1420387332281278465/_Z9Y-Yiv_400x400.jpg";
 * sectionTwo.activityText = "Mark Knopfler features on B.B King's all-star album of Blues greats, released on this day in 2005...";
 * 
 * const sections: MessageCardSection[] = [sectionOne, sectionTwo];
 * card.sections = sections;
 * ```
 * 
 */
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