export interface SimpleTextCardProps {
    text: string;
}

export interface ISimpleTextCard extends SimpleTextCardProps {
    get(): SimpleTextCardProps;
}

export class SimpleTextCard implements ISimpleTextCard  {
    
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    get(): SimpleTextCardProps {
        return {
            text: this.text
        };
    }
}
