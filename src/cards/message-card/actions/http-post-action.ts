import { HttpPostActionHeaderProps, HttpPostActionProps, PotentialActionType } from "../../types/message-card-types";

interface IHttpPostAction extends HttpPostActionProps {
    get(): HttpPostActionProps;
}

export class HttpPostAction implements IHttpPostAction {
    private _target: string;
    private _body: string;
    private _bodyContentType?: string;
    private _headers?: HttpPostActionHeaderProps[];
    private _type: PotentialActionType;
    private _name: string;

    constructor(target: string, body: string, name: string) {
        this._target = target;
        this._body = body;
        this._name = name;
        this._headers = [];
        this._type = "HttpPOST";
    }

    set target(target: string) { this._target = target; }
    get target(): string { return this._target; }

    set body(body: string) { this._body = body; }
    get body(): string { return this._body; }

    set bodyContentType(bodyContentType: string) { this._bodyContentType = bodyContentType; }
    get bodyContentType(): string { return this._bodyContentType; }

    set headers(headers: HttpPostActionHeaderProps[]) { this._headers = headers; }
    get headers(): HttpPostActionHeaderProps[] { return this._headers; }

    set name(name: string) { this._name = name; }
    get name(): string { return this._name; }

    get["@type"](): PotentialActionType { return this._type; }

    get(): HttpPostActionProps {
        return {
            "@type": this["@type"],
            name: this.name,
            target: this.target,
            body: this.body,
            bodyContentType: this.bodyContentType,
            headers: this.headers
        }
    }

}