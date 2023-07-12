import { BaseClass } from "../../../utils/base-class";
import { HttpPostActionHeaderProps, HttpPostActionProps, PotentialActionType } from "../../types/message-card-types";

interface IHttpPostAction extends HttpPostActionProps, BaseClass<HttpPostActionProps> {}
/**
 * @group MessageCard.Actions
 * @description An action that uses POST request to an HTTP endpoint.
 * @example
 * const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet");
 * const moveAction = new ActionCardAction("Move");
 * const moveActionOK = new HttpPostAction("https://trello.com", "ok");
 * moveActionOK.body = "body of post request";
 * const moveActionHttpPostActions: HttpPostAction[] = [moveActionOK];
 * moveAction.actions = moveActionHttpPostActions;

 * const choice1 = new MultiChoiceInputChoice("Choice 1", "Choice 1");
 * const choice2 = new MultiChoiceInputChoice("Choice 2", "Choice 2");
 * const choices: MultiChoiceInputChoice[] = [choice1, choice2];

 * const multiChoiceInput = new MultiChoiceInput("id", "Pick as list", "", choices)
 * const multiChoiceInputs: MultiChoiceInput[] = [multiChoiceInput];
 * moveAction.inputs = multiChoiceInputs;
 * 
 * const potentialActions: ActionCardAction[] = [moveAction];
 * card.potentialAction = potentialActions;
 */
export class HttpPostAction implements IHttpPostAction {
    target?: string;
    body?: string;
    bodyContentType?: string;
    headers?: HttpPostActionHeaderProps[];
    readonly ["@type"]: PotentialActionType;
    name: string;

    constructor(target: string, name: string) {
        this.target = target;
        this.name = name;
        this["@type"] = "HttpPOST";
    }

    toObject(): HttpPostActionProps {
        return Object.assign({}, this)
    }

}