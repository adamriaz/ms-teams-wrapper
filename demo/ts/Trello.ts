import {
    ActionCardAction, DateInput, HttpPostAction, MessageCard, MessageCardSection, MessageCardSectionFact, MultiChoiceInput, MultiChoiceInputChoice,
    OpenUriAction, TextInput, Webhook,
} from "../../src";

import {
    ActionCardActionProps, HttpPostActionProps, MessageCardSectionFactProps, MessageCardSectionProps,
    MultiChoiceInputChoiceProps, OpenURIActionProps, OpenURITargetProps
} from '../../src/types';
import { demoUrl } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sendTrelloCard() {
    try {
        const card = new MessageCard("Card Test", "Card created: Test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        card.themeColor = "0078D7";

        // Add sections
        const section = new MessageCardSection("");
        section.activityTitle = "David Claux";
        section.activitySubtitle = "01/07/2023, 11:46am";
        section.activityImage = "https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg";
        const sections: MessageCardSectionProps[] = [section];

        // List of facts to section
        const boardFact = new MessageCardSectionFact("Board:", "Name of board");
        const listFact = new MessageCardSectionFact("List:", "Name of list");
        const assignedFact = new MessageCardSectionFact("Assigned to:", "(none)");
        const dueDateFact = new MessageCardSectionFact("Due date:", "(none)");
        const facts: MessageCardSectionFactProps[] = [boardFact, listFact, assignedFact, dueDateFact];
        section.facts = facts;

        // List of actions to section
        // Action 1 - Due Date (Post request)
        const dateAction = new ActionCardAction("Set due date");
        
        const dateActionOK = new HttpPostAction("https://trello.com", "ok");
        dateActionOK.body = "body of post request";

        const dateActionHttpPostActions: HttpPostActionProps[] = [dateActionOK];
        dateAction.actions = dateActionHttpPostActions;
        // Date input
        const dateActionInput = new DateInput("dueDate", "Select a date", "");
        const dateActionInputs: DateInput[] = [dateActionInput];
        dateAction.inputs = dateActionInputs;


        // Action 2 - Move (Post request)
        const moveAction = new ActionCardAction("Move");
        const moveActionOK = new HttpPostAction("https://trello.com", "ok");
        moveActionOK.body = "body of post request";
        const moveActionHttpPostActions: HttpPostActionProps[] = [moveActionOK];
        moveAction.actions = moveActionHttpPostActions;

        //Multiple choice input
        
        const choice1 = new MultiChoiceInputChoice("Choice 1", "Choice 1");
        const choice2 = new MultiChoiceInputChoice("Choice 2", "Choice 2");
        const choices: MultiChoiceInputChoiceProps[] = [choice1, choice2];

        const multiChoiceInput = new MultiChoiceInput("id", "Pick as list", "", choices)
        const multiChoiceInputs: MultiChoiceInput[] = [multiChoiceInput];
        moveAction.inputs = multiChoiceInputs;

        // Action 3 - Add comment (Post request)
        const addCommentAction = new ActionCardAction("Add comment");
        const addCommentActionOK = new HttpPostAction("https://trello.com", "ok");
        addCommentActionOK.body = "body of post request";
        const addCommentActionHttpPostActions: HttpPostActionProps[] = [addCommentActionOK];
        addCommentAction.actions = addCommentActionHttpPostActions;

        // Text input
        const addCommentTextInput = new TextInput(true, 200, "comment", true, "Enter a comment", "");
        const addCommentTextInputs: TextInput[] = [addCommentTextInput];
        addCommentAction.inputs = addCommentTextInputs;

        // Action 4 - View in Trello (Get request)
        const uriTarget: OpenURITargetProps = {
            os: "default",
            uri: "https://trello.com"
        }
        const openUriActionTargets: OpenURITargetProps[] = [uriTarget];
        const viewInTrello = new OpenUriAction("View in Trello", openUriActionTargets);

        // Add actions to card       
        const potentialActions: ActionCardActionProps[] & OpenURIActionProps[] = [dateAction, moveAction, addCommentAction, viewInTrello];

        card.potentialAction = potentialActions;
        card.sections = sections;

        const webhook = new Webhook(demoUrl, card);

        const response = await webhook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}