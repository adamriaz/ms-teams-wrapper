[![codecov](https://codecov.io/gh/adamriaz/ms-teams-wrapper/branch/main/graph/badge.svg?token=CWs1H3PAlb)](https://codecov.io/gh/adamriaz/ms-teams-wrapper)
[![Build CI](https://github.com/adamriaz/ms-teams-wrapper/actions/workflows/build.yml/badge.svg)](https://github.com/adamriaz/ms-teams-wrapper/actions/workflows/build.yml)

# Microsoft Teams Webhook Wrapper
A node library to send formatted messages and cards to webhook connectors on Microsoft Teams channels.

## Install
[![npm](https://img.shields.io/npm/v/ms-teams-wrapper)](https://www.npmjs.com/package/ms-teams-wrapper)

Use `yarn`
```bash
$ yarn add ms-teams-wrapper
```

Use `npm`
```bash
$ npm install ms-teams-wrapper
```

## Usage
A simple example to execute a message to your connector.
```typescript
import { Webhook, SimpleTextCard } from "ms-teams-wrapper";

const url = "https://[account-name].webhook.office.com";

const data = new SimpleTextCard("Hello World!");

const webhook = new Webhook(url, data);
const response = await webhook.sendMessage();
```
Another way to send messages is to pass a plain object. This needs to be in the correct format to successfully send the message.
```typescript
const data = {
    text: "Test notification"
};
const webhook = new Webhook(url, data);
const response = await webhook.sendMessage();
```
The connector url can be found by following this guide: https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=javascript#create-incoming-webhooks-1

## Demo
Demo files can be found here: https://github.com/adamriaz/ms-teams-wrapper/tree/main/demo

## Development
- Clode the repository
- Use yarn `npm i -g yarn`
- `yarn` to install dependencies
- `yarn test` to test
- `yarn build` to build to the /dist folder

## Testing
Tests files are written using Jest (Typescript)

Tests files location: /tests/**/*.test.ts

Use `yarn test` or `yarn test:watch`