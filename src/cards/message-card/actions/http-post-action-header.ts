import { BaseClass } from "../../../utils/base-class";
import { HttpPostActionHeaderProps } from "../../types/message-card-types";

interface IHttpPostActionHeader extends HttpPostActionHeaderProps, BaseClass<HttpPostActionHeaderProps> {}
/**
 * @group MessageCard.Actions
 * @description Represents a header for a POST request action.
 */
export class HttpPostActionHeader implements IHttpPostActionHeader {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    toObject(): HttpPostActionHeaderProps {
        return Object.assign({}, this);
    }
}
