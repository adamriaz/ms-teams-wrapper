import { BaseClass } from "../utils/base-class";

export interface SimpleTextCardProps {
    text: string;
}

interface ISimpleTextCard extends SimpleTextCardProps, BaseClass<SimpleTextCardProps> {}

export class SimpleTextCard implements ISimpleTextCard  {
    
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    toObject(): SimpleTextCardProps {
        return Object.assign({}, this);
    }
}
