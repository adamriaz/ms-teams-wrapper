import { BaseClass } from "../../../utils/base-class";
import { HttpPostActionHeaderProps, HttpPostActionProps, PotentialActionType } from "../../types/message-card-types";

interface IHttpPostAction extends HttpPostActionProps, BaseClass<HttpPostActionProps> {}
/**
 * @group MessageCard.Actions
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