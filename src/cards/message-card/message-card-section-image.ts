import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionImageProps } from "../types/message-card-types";

interface IMessageCardSectionImage extends MessageCardSectionImageProps, BaseClass<MessageCardSectionImageProps> {}

export class MessageCardSectionImage implements IMessageCardSectionImage {
    title: string;
    image: string;

    constructor(title: string, image: string) {
        this.title = title;
        this.image = image;
    }

    toObject(): MessageCardSectionImageProps {
        return Object.assign({}, this);
    }

}