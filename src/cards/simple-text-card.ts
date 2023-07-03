export interface SimpleTextCardProps {
    text: string;
}

export interface ISimpleTextCard extends SimpleTextCardProps {
    get(): SimpleTextCardProps;
}

export class SimpleTextCard implements ISimpleTextCard  {
    
    private _text: string;

    constructor(text: string) {
        this._text = text;
    }

    set text(text: string) { this._text = text }
    get text(): string { return this._text }

    get(): SimpleTextCardProps {
        return {
            text: this.text
        };
    }
}
