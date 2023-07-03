import { MessageCardSectionImageProps } from "../types/message-card-types";

interface IMessageCardSectionImage extends MessageCardSectionImageProps {
    get(): MessageCardSectionImageProps;
}

export class MessageCardSectionImage implements IMessageCardSectionImage {
    private _title: string;
    private _image: string;

    constructor(title: string, image: string) {
        this._title = title;
        this._image = image;
    }

    set title (title: string) { this._title = title; }
    get title(): string { return this._title; }

    set image(image: string) { this._image = image; }
    get image(): string { return this._image; }

    get(): MessageCardSectionImageProps {
        return {
            title: this.title,
            image: this.image
        }
    }

}