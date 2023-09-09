import express,{ RequestHandler} from "express";
import env from "./utils/validateEnv";
import "dotenv/config";
import { notion } from "./server";




const databaseID = env.NOTION_DATABASE;

interface JoinMailingList {
    emailAddress?: string,
    name?: string,
    tag?: string,
}

export const joinMailingList: RequestHandler<unknown, unknown, JoinMailingList, unknown> = async (req, res) => {
    const emailAddress = req.body.emailAddress;
    const name = req.body.name;
    const tag = "Mailing List";

    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseID },
            properties: {
                email: {
                    title: [
                        {
                            text: {
                                content: emailAddress || " "
                            }
                        }
                    ]
                },
                name: {
                    rich_text: [
                        {
                            text: {
                                content: name || " "
                            }
                        }
                    ]
                },
                tag: {
                    multi_select: ([
                        {
                            name: tag
                        }
                    ])
                },
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const router = express.Router();

router.post("/joinmailinglist", joinMailingList);

export default router;
