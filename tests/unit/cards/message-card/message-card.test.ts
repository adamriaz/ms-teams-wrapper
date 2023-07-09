import { describe, expect, it } from "@jest/globals";
import { MessageCard } from "../../../../src/cards/message-card/message-card";
import { MessageCardSection } from "../../../../src/cards/message-card/message-card-section";
import { MessageCardSectionFact } from "../../../../src/cards/message-card/message-card-section-fact";
import { MessageCardSectionImage } from "../../../../src/cards/message-card/message-card-section-image";
import { IPotentialActionTargetOSType, OpenURITargetProps } from "../../../../src/cards/types/message-card-types";
import { OpenUriAction } from "../../../../src/cards/message-card/actions/open-uri-action";

describe('MessageCard class', () => {
    it('should create an instance of MessageCard', () => {
        const messageCard = new MessageCard("testing", "test", "test");
        expect(messageCard).toBeDefined();
        expect(messageCard.summary).toBe("testing");
        expect(messageCard.title).toBe("test");
        expect(messageCard.text).toBe("test");
        expect(messageCard["@type"]).toBe("MessageCard");
        expect(messageCard["@context"]).toBe("http://schema.org/extensions");
    });

    it('check if get method returns expected values', () => {
        const messageCard = new MessageCard("testing", "test", "test");
        messageCard.themeColor = "000000";
        messageCard.title = "test";
        messageCard.text = "test";
        messageCard.summary = "testing";
        
        messageCard.correlationId = "test-card";
        messageCard.expectedActors = ["tester@test.com"];
        messageCard.potentialAction = [];

        const section = new MessageCardSection("test");
        section.text = "test text";
        section.activityTitle = "test activity";
        section.activitySubtitle = "test subtitle";
        section.activityText = "test activity text";
        section.activityImage = "https://picsum.photos/id/14/367/267";
        const fact = new MessageCardSectionFact("Assignment", "Assignment 1");
        const facts: MessageCardSectionFact[] = []
        facts.push(fact);

        section.facts = facts;
        section.heroImage = "https://picsum.photos/id/14/367/267";

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
        const sections: MessageCardSection[] = [];
        sections.push(section);

        messageCard.sections = sections;

        expect(messageCard.correlationId).toBe("test-card");
        expect(messageCard.expectedActors).toEqual(["tester@test.com"]);
        expect(messageCard.themeColor).toBe("000000");
        expect(messageCard.title).toBe("test");
        expect(messageCard.text).toBe("test");
        expect(messageCard.summary).toBe("testing");
        expect(messageCard.sections).toEqual(sections);
        expect(messageCard.potentialAction).toEqual([]);
        expect(messageCard.toObject()).toStrictEqual({
            correlationId: "test-card",
            expectedActors: ["tester@test.com"],
            themeColor: "000000",
            title: "test",
            text: "test",
            summary: "testing",
            sections,
            potentialAction: [],
            "@context": "http://schema.org/extensions",
            "@type": "MessageCard"
        });
        
    });
});