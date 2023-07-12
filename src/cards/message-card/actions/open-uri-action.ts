import { BaseClass } from "../../../utils/base-class";
import { OpenURIActionProps, OpenURITargetProps, PotentialActionType } from "../../types/message-card-types";

interface IOpenURIAction extends OpenURIActionProps, BaseClass<OpenURIActionProps> {}
/**
 * @group MessageCard.Actions
 * @description An action that uses GET request to an HTTP endpoint.
 * @example
 * const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet");
 * const uriTarget: OpenURITargetProps = {
 *  os: "default",
 *  uri: "https://trello.com"
 * }
 * const openUriActionTargets: OpenURITargetProps[] = [uriTarget];
 * const viewInTrello = new OpenUriAction("View in Trello", openUriActionTargets);
 * const potentialActions: ActionCardActionProps[] & OpenURIActionProps[] = [viewInTrello];
 *
 * card.potentialAction = potentialActions;
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