import { BaseClass } from "../../../utils/base-class";
import { BaseInputTypes, DateInputProps } from "../../types/message-card-types";

interface IDateInput extends DateInputProps, BaseClass<DateInputProps> {}
/**
 * @group MessageCard.Inputs
 * @description Date input for {@link MessageCard}. This requires the {@link ActionCardAction} and {@link HttpPostAction} instance.
 * @example 
 * 
 * const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet");
 * const dateAction = new ActionCardAction("Set due date");
        
 * const dateActionOK = new HttpPostAction("https://trello.com", "ok");
 * dateActionOK.body = "body of post request";

 * const dateActionHttpPostActions: HttpPostAction[] = [dateActionOK];
 * dateAction.actions = dateActionHttpPostActions;
 *
 * const dateActionInput = new DateInput("dueDate", "Select a date", "");
 * const dateActionInputs: DateInput[] = [dateActionInput];
 * dateAction.inputs = dateActionInputs;
 * 
 * const potentialActions: ActionCardAction[] = [dateAction];
 * card.potentialAction = potentialActions;
 */
export class DateInput implements IDateInput {
    includeTime?: boolean;
    id: string;
    readonly ["@type"]: BaseInputTypes;
    isRequired?: boolean;
    title: string;
    value: string;


    constructor(id: string, title: string, value: string) {
        this["@type"] = "DateInput"
        this.id = id;
        this.title = title;
        this.value = value;
    }

    toObject(): DateInputProps {
        return Object.assign({}, this);
    }
}