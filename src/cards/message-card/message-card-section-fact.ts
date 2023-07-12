import { BaseClass } from "../../utils/base-class";
import { MessageCardSectionFactProps } from "../types/message-card-types";

interface IMessageCardSectionFact extends MessageCardSectionFactProps, BaseClass<MessageCardSectionFactProps> {}
/**
 * @group MessageCard
 * @description Section facts are list of items that are displayed using {@link MessageCardSection.facts | facts} for {@link MessageCardSection}
 * @example 
 * ```ts
 * const section = new MessageCardSection("**Elon Musk**");
 * const boardFact = new MessageCardSectionFact("Board:", "Name of board");
 * const listFact = new MessageCardSectionFact("List:", "Name of list");
 * const assignedFact = new MessageCardSectionFact("Assigned to:", "(none)");
 * const dueDateFact = new MessageCardSectionFact("Due date:", "(none)");
 * const facts: MessageCardSectionFact[] = [boardFact, listFact, assignedFact, dueDateFact];
 * section.facts = facts;
 * ```
 */
export class MessageCardSectionFact implements IMessageCardSectionFact {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    toObject(): MessageCardSectionFactProps {
        return Object.assign({}, this);
    }
    
}