import { SimpleTextCardProps } from "../cards/simple-text-card";
import { MessageCardProps } from "../cards/types/message-card-types";

export type JSONType =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONType }
  | Array<JSONType>;

export type WebhookRequest = JSONType | SimpleTextCardProps | MessageCardProps

export interface WebhookResult {
  data: string;
}

export interface WebhookError {
  errorMessage: string;
  data: any;
  status: number;
}