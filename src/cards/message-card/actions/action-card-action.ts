import { ActionCardActionProps, ActionTypesForActionCardsActions, InputTypes, PotentialActionType } from "../../types/message-card-types";

export interface IActionCardAction extends ActionCardActionProps {
    get(): ActionCardActionProps;
}

export class ActionCardAction implements IActionCardAction {
    private _actions: ActionTypesForActionCardsActions;
    private _inputs: InputTypes[];
    private _name: string;
    private _type: PotentialActionType;

    constructor(name: string) {
        this._name = name;
        this._inputs = [];
        this._actions = [];
        this._type = "ActionCard";
    }

    set name(name: string) { this._name = name }
    get name(): string { return this._name }

    set inputs(inputs: InputTypes[]) { this._inputs = inputs }
    get inputs(): InputTypes[] { return this._inputs }

    set actions(actions: ActionTypesForActionCardsActions) { this._actions = actions }
    get actions(): ActionTypesForActionCardsActions { return this._actions }

    get ["@type"]() { return this._type }

    get(): ActionCardActionProps {
        return {
            "@type": this["@type"],
            name: this.name,
            inputs: this.inputs,
            actions: this.actions
        }
    }
} 
