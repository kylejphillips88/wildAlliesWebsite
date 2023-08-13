import { Client } from "@notionhq/client";
import cors from "cors";
import "dotenv/config";
import createHttpError, { isHttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import env from "./utils/validateEnv";
import MailingList from "./mailingList";
import ContactUs from "./contactUs";

const app = express();
const port = env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({
    credentials: true,
        origin: "https://wildallies.com.au",
}));

export const notion = new Client({
    auth: process.env.NOTION_KEY, 
    });

app.use('/api', MailingList)

app.use('/api', ContactUs)

app.listen(port, () => {
    console.log("Server running on port: " + port);
});

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
        let errorMessage = "An unknown error occurred";
        let statusCode = 500;
        if (isHttpError(error)) {
            statusCode = error.status;
            errorMessage = error.message;
        }
        res.status(statusCode).json({ error: errorMessage });
});



export default app;