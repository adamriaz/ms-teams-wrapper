import { OpenURIActionProps, OpenURITargetProps, PotentialActionType } from "../../types/message-card-types";

interface IOpenURIAction extends OpenURIActionProps {
    get(): OpenURIActionProps;
}

export class OpenUriAction implements IOpenURIAction {
    private _targets: OpenURITargetProps[];
    private _name: string;
    private _type: PotentialActionType;

    constructor(name: string, targets: OpenURITargetProps[]) {
        this._name = name;
        this._targets = targets;
        this._type = "OpenUri";
    }

    set name(name: string) { this._name = name; }
    get name(): string { return this._name; }

    set targets(target: OpenURITargetProps[]) { this._targets = target; }
    get targets(): OpenURITargetProps[] { return this._targets; }

    get ["@type"](): PotentialActionType { return this._type; }

    get(): OpenURIActionProps {
        return {
            "@type": this["@type"],
            name: this.name,
            targets: this.targets
        }
    }
}