import { describe, expect, it } from "@jest/globals";
import { HttpPostActionHeader } from "../../../../../src/cards/message-card/actions/http-post-action-header";
describe('HttpPostActionHeader class', () => {

    it('should create an instance of HttpPostActionHeader', () => {
        const action = new HttpPostActionHeader("CARD-ACTION-STATUS", "pending");
        expect(action).toBeDefined();
        expect(action.name).toBe("CARD-ACTION-STATUS");
        expect(action.value).toBe("pending");
    });

    it('should set properties and return expected values', () => {
        const action = new HttpPostActionHeader("CARD-ACTION-STATUS", "pending");
        action.name = "CARD-ACTION-STATUS";
        action.value = "complete";
        expect(action.name).toBe("CARD-ACTION-STATUS");
        expect(action.value).toBe("complete");
        expect(action.get()).toStrictEqual({
            name: "CARD-ACTION-STATUS",
            value: "complete"
        });
    });

});