import { BaseClass } from "../../../utils/base-class";
import { ActionCardActionProps, ActionTypesForActionCardsActions, InputTypes, PotentialActionType } from "../../types/message-card-types";

interface IActionCardAction extends ActionCardActionProps, BaseClass<ActionCardActionProps> {}
/**
 * @group MessageCard.Actions
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
