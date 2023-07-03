import { MessageCardSectionFactProps, MessageCardSectionImageProps, MessageCardSectionProps, PotentialActionTypes } from "../types/message-card-types";

interface IMessageCardSection extends MessageCardSectionProps{
    get(): MessageCardSectionProps;
}

export class MessageCardSection implements IMessageCardSection {
    private _title: string;
    private _startGroup: boolean;
    private _activityTitle: string;
    private _activitySubtitle: string;
    private _activityText: string;
    private _activityImage: string;
    private _heroImage: string;
    private _text: string;
    private _facts: MessageCardSectionFactProps[];
    private _images: MessageCardSectionImageProps[];
    private _potentialAction: PotentialActionTypes;

    constructor(title: string) {
        this._title = title;
    }

    set title(title: string) { this._title = title; }
    get title(): string { return this._title; }

    set startGroup(startGroup: boolean) { this._startGroup = startGroup; }
    get startGroup(): boolean { return this._startGroup; }

    set activityTitle(activityTitle: string) { this._activityTitle = activityTitle; }
    get activityTitle(): string { return this._activityTitle; }

    set activitySubtitle(activitySubtitle: string) {  this._activitySubtitle = activitySubtitle; }
    get activitySubtitle(): string { return this._activitySubtitle; }

    set activityText(activityText: string) { this._activityText = activityText; }
    get activityText(): string { return this._activityText; }

    set activityImage(activityImage: string) { this._activityImage= activityImage; }
    get activityImage(): string { return this._activityImage; }

    set heroImage(heroImage: string) { this._heroImage = heroImage; }
    get heroImage(): string { return this._heroImage; }

    set text(text: string) { this._text = text; }
    get text(): string { return this._text; }

    set facts(facts: MessageCardSectionFactProps[]) { this._facts = facts; }
    get facts(): MessageCardSectionFactProps[] { return this._facts; }

    set images(images: MessageCardSectionImageProps[]) { this._images = images; }
    get images(): MessageCardSectionImageProps[] { return this._images; }

    set potentialAction(potentialAction: PotentialActionTypes) { this._potentialAction = potentialAction; }
    get potentialAction(): PotentialActionTypes { return this._potentialAction; }

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