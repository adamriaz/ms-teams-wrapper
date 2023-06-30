import { ActionCardActionProps, ActionTypesForActionCardsActions, InputTypes, PotentialActionType } from "../../types/message-card-types";

export interface IActionCardAction extends ActionCardActionProps {
    setName(name: string): void;
    setInputs(inputs: InputTypes[]): void;
    setActions(actions: ActionTypesForActionCardsActions[]): void;
    get(): ActionCardActionProps;
}

export class ActionCardAction implements IActionCardAction {
    actions: ActionTypesForActionCardsActions[];
    inputs: InputTypes[];
    name: string;
    "@type": PotentialActionType;

    constructor(name: string) {
        this.name = name;
        this["@type"] = "ActionCard";
    }

    setName(name: string): void { this.name = name }

    setInputs(inputs: InputTypes[]): void { this.inputs = inputs }

    setActions(actions: ActionTypesForActionCardsActions[]): void { this.actions = actions }

    get(): ActionCardActionProps {
        return {
            "@type": this["@type"],
            name: this.name,
            inputs: this.inputs,
            actions: this.actions
        }
    }
} 
