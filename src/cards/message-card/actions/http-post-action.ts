import { HttpPostActionHeaderProps, HttpPostActionProps, PotentialActionType } from "../../types/message-card-types";

interface IHttpPostAction extends HttpPostActionProps {
    setTarget(target: string): void;
    setBody(body: string): void;
    setBodyContentType(bodyContentType: string): void;
    setHeaders(headers: HttpPostActionHeaderProps[]): void;
    setName(name: string): void;
    get(): HttpPostActionProps;
}

export class HttpPostAction implements IHttpPostAction {
    target: string;
    body: string;
    bodyContentType?: string;
    headers?: HttpPostActionHeaderProps[];
    "@type": PotentialActionType;
    name: string;

    constructor(target: string, body: string, name: string) {
        this.target = target;
        this.body = body;
        this.name = name;
        this["@type"] = "HttpPOST";
    }

    setTarget(target: string): void { this.target = target; }

    setBody(body: string): void { this.body = body; }

    setBodyContentType(bodyContentType: string): void { this.bodyContentType = bodyContentType; }

    setHeaders(headers: HttpPostActionHeaderProps[]): void { this.headers = headers; }

    setName(name: string): void { this.name = name; }

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