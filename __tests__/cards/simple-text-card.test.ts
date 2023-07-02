import { SimpleTextCard } from '../../src/cards/simple-text-card';
import { describe, expect, jest, beforeEach, it } from '@jest/globals';

jest.mock('../../src/cards/simple-text-card', () => {
    return {
        SimpleTextCard: jest.fn().mockImplementation(() => {
            return {
                text: "",
                get: jest.fn().mockReturnValue({ text: "" })
            } 
        })
           
    }
})

describe('SimpleTextCard class', () => {
    const mockSimpleTextCard = jest.mocked(SimpleTextCard)

    beforeEach(() => {
        mockSimpleTextCard.mockClear();
    });

    it('check if it has been called', () => {
        new SimpleTextCard("text");
        expect(mockSimpleTextCard).toHaveBeenCalledTimes(1);
        expect(mockSimpleTextCard).toHaveBeenCalledWith("text");
    })

    it('check if get method returns expected values', () => {
        const simpleTextCard = new SimpleTextCard("test");
        jest.spyOn(simpleTextCard, 'get').mockReturnValue({ text: "test" });
        expect(simpleTextCard.get()).toStrictEqual({ text: "test" });
    })

})
