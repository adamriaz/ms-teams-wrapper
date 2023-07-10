import { MessageCard, MessageCardSection, Webhook } from "../../src";
import { demoUrl } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendTwitterCard() {
    try {
        const card = new MessageCard("Random Tweet", "", "");
        card.themeColor = "0078D7";
        
        const sectionOne = new MessageCardSection("**Elon Musk**");
        sectionOne.activitySubtitle = "@elonmusk - 9/12/2016 at 5:33pm";
        sectionOne.activityText = "Climate change explained in comic book form by xkcd xkcd.com/1732";
        sectionOne.activityImage = "https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0.jpg";

        const sectionTwo = new MessageCardSection("**Mark Knopfler**");
        sectionTwo.activitySubtitle = "@MarkKnopfler - 9/12/2016 at 1:12pm";
        sectionTwo.activityImage = "https://pbs.twimg.com/profile_images/1420387332281278465/_Z9Y-Yiv_400x400.jpg";
        sectionTwo.activityText = "Mark Knopfler features on B.B King's all-star album of Blues greats, released on this day in 2005...";

        const sections: MessageCardSection[] = [sectionOne, sectionTwo];
        card.sections = sections;

        const webhook = new Webhook(demoUrl, card);

        const response = await webhook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}