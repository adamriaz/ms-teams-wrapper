import { BaseClass } from "../utils/base-class";

export interface SimpleTextCardProps {
    text: string;
}

interface ISimpleTextCard extends SimpleTextCardProps, BaseClass<SimpleTextCardProps> {}
/**
 * @group SimpleTextCard
 * @description A simple text card to pass a text to the webhook.
 * @example
 * const card = new SimpleTextCard("Hello world!");
 */
export class SimpleTextCard implements ISimpleTextCard  {
    
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    toObject(): SimpleTextCardProps {
        return Object.assign({}, this);
    }
}
