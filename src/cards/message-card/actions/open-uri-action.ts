import { BaseClass } from "../../../utils/base-class";
import { OpenURIActionProps, OpenURITargetProps, PotentialActionType } from "../../types/message-card-types";

interface IOpenURIAction extends OpenURIActionProps, BaseClass<OpenURIActionProps> {}
/**
 * @group MessageCard.Actions
 */
export class OpenUriAction implements IOpenURIAction {
    targets: OpenURITargetProps[];
    name: string;
    readonly ["@type"]: PotentialActionType;

    constructor(name: string, targets: OpenURITargetProps[]) {
        this.name = name;
        this.targets = targets;
        this["@type"] = "OpenUri";
    }


    toObject(): OpenURIActionProps {
        return Object.assign({}, this);
    }
    
}