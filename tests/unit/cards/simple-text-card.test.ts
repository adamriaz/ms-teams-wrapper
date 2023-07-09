import { SimpleTextCard } from '../../../src/cards/simple-text-card';
import { describe, expect, it } from '@jest/globals';

describe('SimpleTextCard class', () => {

    
    it('check if initialized', () => {
        const simpleTextCard = new SimpleTextCard("text");
        expect(simpleTextCard).toBeDefined();
        expect(simpleTextCard.text).toBe("text");
    });

    it('check if get method returns expected values', () => {
        const simpleTextCard = new SimpleTextCard("test");
        simpleTextCard.text = "testing";
        expect(simpleTextCard.toObject()).toStrictEqual({ text: "testing" });
    });

});
