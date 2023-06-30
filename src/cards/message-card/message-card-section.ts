import { MessageCardSectionFactProps, MessageCardSectionImageProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCardSection extends MessageCardSectionProps{
    setTitle(title: string): void;
    setStartGroup(startGroup: boolean): void;
    setActivityTitle(activityTitle: string): void;
    setActivitySubtitle(activitySubtitle: string): void;
    setActivityText(activityText: string): void;
    setActivityImage(activityImage: string): void;
    setHeroImage(heroImage: string): void;
    setText(text: string): void;
    setFacts(facts: MessageCardSectionFactProps[]): void;
    setImages(images: MessageCardSectionImageProps[]): void;
    setPotentialAction(potentialAction: PotentialActionTypes): void;
    get(): MessageCardSectionProps;
}

export class MessageCardSection implements IMessageCardSection {
    title: string;
    startGroup?: boolean;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    activityImage?: string;
    heroImage?: string;
    text?: string;
    facts?: MessageCardSectionFactProps[];
    images?: MessageCardSectionImageProps[];
    potentialAction?: PotentialActionTypes;

    constructor(title: string) {
        this.title = title;
    }

    setTitle(title: string): void { this.title = title; }

    setStartGroup(startGroup: boolean): void { this.startGroup = startGroup; }

    setActivityTitle(activityTitle: string): void { this.activityTitle = activityTitle; }

    setActivitySubtitle(activitySubtitle: string): void {  this.activitySubtitle = activitySubtitle; }

    setActivityText(activityText: string): void { this.activityText = activityText; }

    setActivityImage(activityImage: string): void { this.activityImage= activityImage; }

    setHeroImage(heroImage: string): void { this.heroImage = heroImage; }

    setText(text: string): void { this.text = text; }

    setFacts(facts: MessageCardSectionFactProps[]): void { this.facts = facts; }

    setImages(images: MessageCardSectionImageProps[]): void { this.images = images; }

    setPotentialAction(potentialAction: PotentialActionTypes): void { this.potentialAction = potentialAction; }

    get(): MessageCardSectionProps {
        return {
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
    }

}