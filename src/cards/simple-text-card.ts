import { JSONType } from "../utils/types";

interface ISimpleTextCard {
    jsonBuilder: JSONType;
    get(): JSONType;
}

export class SimpleTextCard implements ISimpleTextCard  {
    
    jsonBuilder: JSONType;

    constructor(text: string) {
        this.jsonBuilder = {
            text
        }
    }

    get() {
        return this.jsonBuilder;
    }
}
