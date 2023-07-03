import { SimpleTextCard } from '../../../src/cards/simple-text-card';
import { describe, expect, jest, beforeEach, it } from '@jest/globals';

// #Stub
//jest.mock('../../src/cards/simple-text-card')

describe('SimpleTextCard class', () => {

    
    it('check if initialized', () => {
        const simpleTextCard = new SimpleTextCard("text");
        expect(simpleTextCard).toBeDefined();
        expect(simpleTextCard.text).toBe("text");
    });

    it('check if get method returns expected values', () => {
        const simpleTextCard = new SimpleTextCard("test");
        expect(simpleTextCard.get()).toStrictEqual({ text: "test" });
    });

});
