import { ContextTypes, IBaseCard } from "./base-card-variation-types";

export type IPotentialActionTargetOSType = "default" | "iOS" | "android" | "windows";
export type BaseInputTypes = "TextInput" | "DateInput" | "MultiChoiceInput";
export type PotentialActionType = "ActionCard" | "OpenUri" | "HttpPOST";

export interface IMessageCardSectionFact { 
    name: string; 
    value: string; 
}

export interface IMessageCardSectionImage { 
    title: string; 
    image: string; 
}

export interface IHttpPostActionHeader { 
    name: string; 
    value: string; 
}

export interface IOpenURITarget { 
    os: IPotentialActionTargetOSType; 
    uri: string; 
}

export interface IBasePotentialAction {
    "@type": PotentialActionType;
    name: string;
}

export interface IOpenURIAction extends IBasePotentialAction {
    target: IOpenURITarget[];
}

export interface IHttpPostAction extends IBasePotentialAction {
    target: string;
    body: string;
    bodyContentType?: string;
    headers?: IHttpPostActionHeader[];
}

export type ActionTypesForActionCardsActions = IOpenURIAction[] | IHttpPostAction[]


export interface IBaseInput {
    id: string;
    "@type": BaseInputTypes;
    isRequired: boolean;
    title: string;
    value: string;
}

export interface IMultiChoiceInputChoice {
    display: string;
    value: string;
}

export interface ITextInput extends IBaseInput {
    isMultiline: boolean;
    maxLength: number;
}

export interface IDateInput extends IBaseInput {
    includeTime: boolean;
}

export interface IMultiChoiceInput extends IBaseInput {
    choices: IMultiChoiceInputChoice[];
    isMultiSelect: boolean;
    style: string;
}

export type InputTypes = ITextInput | IDateInput | IMultiChoiceInput;

export interface IActionCardAction extends IBasePotentialAction {
    actions: ActionTypesForActionCardsActions[];
    inputs: InputTypes[];
}

export type PotentialActionTypes = IActionCardAction[] | IOpenURIAction[] | IHttpPostAction[];

export interface MessageCardSectionProps {
    title: string;
    startGroup?: boolean;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    activityImage?: string;
    heroImage?: string;
    text?: string;
    facts?: IMessageCardSectionFact[];
    images?: IMessageCardSectionImage[];
    potentialAction?: PotentialActionTypes;
}

export interface IMessageCardSection extends MessageCardSectionProps{
    
}

export interface MessageCardProps extends IBaseCard {
    "@context": ContextTypes
    correlationId?: string;
    expectedActors?: string[];
    title: string;
    summary: string;
    text: string;
    themeColor?: string;
    sections?: MessageCardSectionProps[];
}

export interface IMessageCard extends MessageCardProps {  
    setThemeColor(themeColor: string): void;
    setExpectedActors(expectedActors: string[]): void;
    setCorrelationId(correlationId: string): void;
    build(): MessageCardProps;
}