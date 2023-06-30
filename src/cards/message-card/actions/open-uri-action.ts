import { OpenURIActionProps, OpenURITargetProps, PotentialActionType } from "../../types/message-card-types";

interface IOpenURIAction extends OpenURIActionProps {
    setName(name: string): void;
    setTarget(target: OpenURITargetProps[]): void;
    get(): OpenURIActionProps;
}

export class OpenUriAction implements IOpenURIAction {
    target: OpenURITargetProps[];
    name: string;
    "@type": PotentialActionType;

    constructor(name: string, target: OpenURITargetProps[]) {
        this.name = name;
        this.target = target;
        this["@type"] = "OpenUri";
    }


    setName(name: string): void { this.name = name; }

    setTarget(target: OpenURITargetProps[]): void { this.target = target; }

    get(): OpenURIActionProps {
        return {
            "@type": this["@type"],
            name: this.name,
            target: this.target
        }
    }
}