export type JSONType =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONType }
  | Array<JSONType>;

export interface WebhookResult {
  data: string;
}