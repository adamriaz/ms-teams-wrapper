import { MessageCardSectionImageProps } from "../types/message-card-types";

interface IMessageCardSectionImage extends MessageCardSectionImageProps { 
    setTitle(title: string): void;
    setImage(image: string): void;
    get(): MessageCardSectionImageProps;
}

export class MessageCardSectionImage implements IMessageCardSectionImage {
    title: string;
    image: string;

    constructor(title: string, image: string) {
        this.title = title;
        this.image = image;
    }

    setTitle (title: string): void { this.title = title; }

    setImage(image: string): void { this.image = image; }

    get(): MessageCardSectionImageProps {
        return {
            title: this.title,
            image: this.image
        }
    }

}