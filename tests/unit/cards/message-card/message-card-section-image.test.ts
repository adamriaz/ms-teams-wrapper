import { describe, expect, it } from "@jest/globals";
import { MessageCardSectionImage } from "../../../../src/cards/message-card/message-card-section-image";

describe('MessageCardSectionImage class', () => {
    it('should create an instance of MessageCardSectionImage', () => {
        const image = new MessageCardSectionImage("image1", "https://picsum.photos/id/13/367/267");
        expect(image).toBeDefined();
        expect(image.title).toBe("image1");
        expect(image.image).toBe("https://picsum.photos/id/13/367/267");
    });

    it('check if get method returns expected values', () => {
        const image = new MessageCardSectionImage("image1", "https://picsum.photos/id/14/367/267");
        image.title = "newImage";
        image.image = "https://picsum.photos/id/14/367/267";
        expect(image.title).toBe("newImage");
        expect(image.image).toBe("https://picsum.photos/id/14/367/267");
        expect(image.get()).toStrictEqual({
            title: "newImage",
            image: "https://picsum.photos/id/14/367/267"
        });
    });
});