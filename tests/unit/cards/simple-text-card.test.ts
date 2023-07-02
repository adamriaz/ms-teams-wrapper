import { SimpleTextCard } from '../../../src/cards/simple-text-card';
import { describe, expect, jest, beforeEach, it } from '@jest/globals';

jest.mock('../../../src/cards/simple-text-card')

describe('SimpleTextCard class', () => {
    const mockSimpleTextCard = jest.mocked(SimpleTextCard)

    beforeEach(() => {
        mockSimpleTextCard.mockClear();
    });

    it('check if it has been called', () => {
        new SimpleTextCard("text");
        expect(mockSimpleTextCard).toHaveBeenCalledTimes(1);
    })

    it('check if get method returns { text: "test" }', () => {
        const simpleTextCard = new SimpleTextCard("test");
        jest.spyOn(simpleTextCard, 'get').mockReturnValue({ text: "test" });
        expect(simpleTextCard.get()).toStrictEqual({ text: "test" });
    })
    
})
