import { ActionCardAction, ActionCardActionProps, DateInput, HttpPostAction, HttpPostActionProps, MessageCard, MessageCardSection, 
    MessageCardSectionFact, MessageCardSectionFactProps, MessageCardSectionProps, MultiChoiceInput, MultiChoiceInputChoice, MultiChoiceInputChoiceProps, 
    OpenURIActionProps, OpenURITargetProps, OpenUriAction, TextInput, Webhook } from "../src";

async function sendTrelloCard() {
    try {
        const url = "https://[account-name].webhook.office.com";
        const card = new MessageCard("Card Test", "Card created: Test", "");
        card.themeColor = "0078D7";

        // Add sections
        const sections: MessageCardSectionProps[] = [];
        
        const section = new MessageCardSection("");
        section.activityTitle = "David Claux";
        section.activitySubtitle = "01/07/2023, 11:46am";
        section.activityImage = "https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg";
        section.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        sections.push(section);

        // List of facts to section
        const facts: MessageCardSectionFactProps[] = [];

        const boardFact = new MessageCardSectionFact("Board:", "Name of board");
        const listFact = new MessageCardSectionFact("List:", "Name of list");
        const assignedFact = new MessageCardSectionFact("Assigned to:", "(none)");
        const dueDateFact = new MessageCardSectionFact("Due date:", "(none)");
        facts.push(boardFact, listFact, assignedFact, dueDateFact);
        section.facts = facts;

        // List of actions to section
        // Action 1 - Due Date (Post request)
        const dateAction = new ActionCardAction("Set due date");
        const dateActionHttpPostActions: HttpPostActionProps[] = [];
        const dateActionOK = new HttpPostAction("https://trello.com", "ok");
        dateActionOK.body = "body of post request";

        dateActionHttpPostActions.push(dateActionOK);
        dateAction.actions = dateActionHttpPostActions;
        // Date input
        const dateActionInput = new DateInput("dueDate", "Select a date", "");
        const dateActionInputs: DateInput[] = [];
        dateActionInputs.push(dateActionInput);
        dateAction.inputs = dateActionInputs;


        // Action 2 - Move (Post request)
        const moveAction = new ActionCardAction("Move");
        const moveActionHttpPostActions: HttpPostActionProps[] = [];
        const moveActionOK = new HttpPostAction("https://trello.com", "ok");
        moveActionOK.body = "body of post request";
        moveActionHttpPostActions.push(moveActionOK);
        moveAction.actions = moveActionHttpPostActions;
        
        //Multiple choice input
        const choices: MultiChoiceInputChoiceProps[] = [];
        const choice1 = new MultiChoiceInputChoice("Choice 1", "Choice 1");
        const choice2 = new MultiChoiceInputChoice("Choice 2", "Choice 2");
        choices.push(choice1, choice2);

        const multiChoiceInput = new MultiChoiceInput("id", "Pick as list", "", choices)
        const multiChoiceInputs: MultiChoiceInput[] = [];
        multiChoiceInputs.push(multiChoiceInput);
        moveAction.inputs = multiChoiceInputs;

        // Action 3 - Add comment (Post request)
        const addCommentAction = new ActionCardAction("Add comment");
        const addCommentActionHttpPostActions: HttpPostActionProps[] = [];
        const addCommentActionOK = new HttpPostAction("https://trello.com", "ok");
        addCommentActionOK.body = "body of post request";
        addCommentActionHttpPostActions.push(addCommentActionOK);
        addCommentAction.actions = addCommentActionHttpPostActions;

        // Text input
        const addCommentTextInput = new TextInput(true, 200, "comment", true, "Enter a comment", "");
        const addCommentTextInputs: TextInput[] = [];
        addCommentTextInputs.push(addCommentTextInput);
        addCommentAction.inputs = addCommentTextInputs;

        // Action 4 - View in Trello (Get request)
        const openUriActionTargets: OpenURITargetProps[] = [];
        const uriTarget: OpenURITargetProps = {
            os: "default",
            uri: "https://trello.com"
        }
        openUriActionTargets.push(uriTarget);
        const viewInTrello = new OpenUriAction("View in Trello", openUriActionTargets);

        // Add actions to card       
        const potentialActions: ActionCardActionProps[] & OpenURIActionProps[] = [];
        potentialActions.push(dateAction, moveAction, addCommentAction, viewInTrello);

        card.potentialAction = potentialActions;
        card.sections = sections;

        const webook = new Webhook(url, card);

        const response = await webook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}