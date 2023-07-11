import { BaseCardProps, ContextTypes } from "./base-card-variation-types";

export type IPotentialActionTargetOSType = "default" | "iOS" | "android" | "windows";
export type BaseInputTypes = "TextInput" | "DateInput" | "MultiChoiceInput";
export type PotentialActionType = "ActionCard" | "OpenUri" | "HttpPOST";

export interface MessageCardSectionFactProps {
    name: string;
    value: string;
}

export interface MessageCardSectionImageProps {
    title: string; 
    image: string;
}

export interface BaseInputProps {
    id: string;
    readonly "@type": BaseInputTypes;
    isRequired?: boolean;
    title: string;
    value: string;
}

export interface MultiChoiceInputChoiceProps {
    display: string;
    value: string;
}

export interface TextInputProps extends BaseInputProps {
    isMultiline?: boolean;
    maxLength: number;
}

export interface DateInputProps extends BaseInputProps {
    includeTime?: boolean;
}

export interface MultiChoiceInputProps extends BaseInputProps {
    choices: MultiChoiceInputChoiceProps[];
    isMultiSelect?: boolean;
    style?: string;
}

export type InputTypes = TextInputProps | DateInputProps | MultiChoiceInputProps;

export interface HttpPostActionHeaderProps { 
    name: string; 
    value: string; 
}

export interface OpenURITargetProps { 
    os: IPotentialActionTargetOSType; 
    uri: string; 
} 

export interface BasePotentialActionProps {
    readonly "@type": PotentialActionType;
    name: string;
}

export interface OpenURIActionProps extends BasePotentialActionProps {
    targets?: OpenURITargetProps[];
}

export interface HttpPostActionProps extends BasePotentialActionProps {
    target?: string;
    body?: string;
    bodyContentType?: string;
    headers?: HttpPostActionHeaderProps[];
}

export type ActionTypesForActionCardsActions = OpenURIActionProps[] | HttpPostActionProps[]

export interface ActionCardActionProps extends BasePotentialActionProps {
    actions?: ActionTypesForActionCardsActions;
    inputs?: InputTypes[];
}

export type PotentialActionTypes = ActionCardActionProps[] & OpenURIActionProps[] & HttpPostActionProps[];

export interface MessageCardSectionProps {
    title: string;
    startGroup?: boolean;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    activityImage?: string;
    heroImage?: MessageCardSectionImageProps;
    text?: string;
    facts?: MessageCardSectionFactProps[];
    images?: MessageCardSectionImageProps[];
    potentialAction?: PotentialActionTypes;
}

export interface MessageCardProps extends BaseCardProps {
    readonly "@context": ContextTypes
    correlationId?: string;
    expectedActors?: string[];
    title: string;
    summary: string;
    text: string;
    themeColor?: string;
    sections?: MessageCardSectionProps[];
    potentialAction?: PotentialActionTypes;
}