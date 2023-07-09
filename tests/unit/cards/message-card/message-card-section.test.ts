import { describe, expect, it } from "@jest/globals";

import { MessageCardSection } from "../../../../src/cards/message-card/message-card-section";
import { MessageCardSectionFact } from "../../../../src/cards/message-card/message-card-section-fact";
import { MessageCardSectionImage } from "../../../../src/cards/message-card/message-card-section-image";
import { IPotentialActionTargetOSType, OpenURITargetProps } from "../../../../src/cards/types/message-card-types";
import { OpenUriAction } from "../../../../src/cards/message-card/actions/open-uri-action";

describe('MessageCardSection class', () => {
    it('should create an instance of MessageCardSection', () => {
        const section = new MessageCardSection("test");
        expect(section).toBeDefined();
        expect(section.title).toBe("test");
    });

    it('check if get method returns expected values', () => {
        const section = new MessageCardSection("test");
        section.title = "test card";
        section.text = "test text";
        section.activityTitle = "test activity";
        section.activitySubtitle = "test subtitle";
        section.activityText = "test activity text";
        section.activityImage = "https://picsum.photos/id/14/367/267";
        const fact = new MessageCardSectionFact("Assignment", "Assignment 1");
        const facts: MessageCardSectionFact[] = []
        facts.push(fact);

        section.facts = facts;
        const heroImage = new MessageCardSectionImage("image1", "https://picsum.photos/id/13/367/267");
        section.heroImage = heroImage;

        const image = new MessageCardSectionImage("image1", "https://picsum.photos/id/13/367/267");
        const images: MessageCardSectionImage[] = []
        images.push(image);
        section.images = images;

        const os: IPotentialActionTargetOSType = "default";
        const uri = "https://www.google.com";
        const target = { os, uri }
        const targets: OpenURITargetProps[] = [];
        targets.push(target)
        const action = new OpenUriAction("Visit my site", targets);
        const potentialActions: OpenUriAction[] = [];
        potentialActions.push(action);

        section.potentialAction = potentialActions;
        section.startGroup = true;

        expect(section.title).toBe("test card");
        expect(section.text).toBe("test text");
        expect(section.activityTitle).toBe("test activity");
        expect(section.activitySubtitle).toBe("test subtitle");
        expect(section.activityText).toBe("test activity text");
        expect(section.activityText).toBe("test activity text");
        expect(section.activityImage).toBe("https://picsum.photos/id/14/367/267");
        expect(section.facts).toEqual(facts);
        expect(section.heroImage).toBe(heroImage);
        expect(section.images).toEqual(images);
        expect(section.potentialAction).toStrictEqual(potentialActions);
        expect(section.startGroup).toBe(true);


        expect(section.toObject()).toStrictEqual({
            title: "test card",
            text: "test text",
            activityTitle: "test activity",
            activitySubtitle: "test subtitle",
            activityText: "test activity text",
            activityImage: "https://picsum.photos/id/14/367/267",
            facts,
            potentialAction: potentialActions,
            startGroup: true,
            images,
            heroImage        
        });
    });
});