import { Webhook } from "../../src";
import { demoUrl } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function send() {
    try {
        const data = {
            "type": "message",
            "attachments": [
                {
                    "contentType": "application/vnd.microsoft.card.hero",
                    "content": {
                        "title": "Seattle Center Monorail",
                        "subtitle": "Seattle Center Monorail",
                        "text": "The Seattle Center Monorail is an elevated train line between Seattle Center (near the Space Needle) and downtown Seattle. It was built for the 1962 World's Fair. Its original two trains, completed in 1961, are still in service.",
                        "images": [
                            {
                                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg"
                            }
                        ],
                        "buttons": [
                            {
                                "type": "openUrl",
                                "title": "Official website",
                                "value": "https://www.seattlemonorail.com"
                            },
                            {
                                "type": "openUrl",
                                "title": "Wikipeda page",
                                "value": "https://en.wikipedia.org/wiki/Seattle_Center_Monorail"
                            }
                        ]
                    }
                }
            ],

        }
        const webhook = new Webhook(demoUrl, data);
        const response = await webhook.sendMessage();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}