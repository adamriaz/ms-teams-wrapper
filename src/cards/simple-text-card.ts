import { JSONType } from "../utils/types";

export class SimpleTextCard {
    
    private jsonBuilder: JSONType;

    constructor(text: string) {
        this.jsonBuilder = {
            text
        }
    }

    public build() {
        return this.jsonBuilder;
    }
}
