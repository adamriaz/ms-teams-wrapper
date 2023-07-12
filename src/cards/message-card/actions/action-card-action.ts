import { BaseClass } from "../../../utils/base-class";
import { ActionCardActionProps, ActionTypesForActionCardsActions, InputTypes, PotentialActionType } from "../../types/message-card-types";

interface IActionCardAction extends ActionCardActionProps, BaseClass<ActionCardActionProps> {}
/**
 * @group MessageCard.Actions
 * @description ActionCardAction is an instance that represents a single action in a MessageCard.
 * @example
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
export class ActionCardAction implements IActionCardAction {
    actions: ActionTypesForActionCardsActions;
    inputs: InputTypes[];
    name: string;
    readonly ["@type"]: PotentialActionType;

    constructor(name: string) {
        this.name = name;
        this.inputs = [];
        this.actions = [];
        this["@type"] = "ActionCard";
    }

    toObject(): ActionCardActionProps {
        return Object.assign({}, this);
    }
} 
