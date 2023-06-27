import { JSONType } from "../utils/types";

export class MessageCard {

    private jsonBuilder: JSONType;
    
    constructor(summary: string, title: string) {
        this.jsonBuilder = {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            summary,
            title
        }
    }

    public build() {
        return this.jsonBuilder;
    }
}