import { IMessageCardSection, IMessageCardSectionFact, IMessageCardSectionImage, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

export class MessageCardSection implements IMessageCardSection {
    title: string;
    startGroup?: boolean;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    activityImage?: string;
    heroImage?: string;
    text?: string;
    facts?: IMessageCardSectionFact[];
    images?: IMessageCardSectionImage[];
    potentialAction?: PotentialActionTypes;

    constructor(title: string) {
        this.title = title;
    }

    setstartGroup(startGroup: boolean) { this.startGroup = startGroup; }

    setActivityTitle(activityTitle: string) { this.activityTitle = activityTitle; }

    setActivitySubtitle(activitySubtitle: string) {  this.activitySubtitle = activitySubtitle; }

    setActivityText(activityText: string) { this.activityText = activityText; }

    setActivityImage(activityImage: string) { this.activityImage= activityImage; }

    setHeroImage(heroImage: string) { this.heroImage = heroImage; }

    setText(text: string) { this.text = text; }

    setFacts(facts: IMessageCardSectionFact[]) { this.facts = facts; }

    build() {
        const messageCardSection: MessageCardSectionProps = {
            title: this.title,
            startGroup: this.startGroup,
            activityTitle: this.activityTitle,
            activitySubtitle: this.activitySubtitle,
            activityText: this.activityText,
            activityImage: this.activityImage,
            heroImage: this.heroImage,
            text: this.text,
            facts: this.facts,
            images: this.images,
            potentialAction: this.potentialAction
        }
        return messageCardSection;
    }

}