export type CardTypes = "MessageCard" | "ActionCard";
export type ContextTypes = "http://schema.org/extensions";

export interface IBaseCard {
    "@type": CardTypes
}