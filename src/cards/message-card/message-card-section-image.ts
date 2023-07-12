import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionImageProps } from "../types/message-card-types";

interface IMessageCardSectionImage extends MessageCardSectionImageProps, BaseClass<MessageCardSectionImageProps> {}
/**
 * @group MessageCard
 * @description MessageCardSectionImage instance used as {@link MessageCardSection.images | images} for {@link MessageCardSection}.
 * @example
 * ```ts
 * const section = new MessageCardSection("**Elon Musk**");
 * const image = new MessageCardSectionImage("Title", "https://example.com/image.png");
 * section.images = [image]
 * 
 */
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