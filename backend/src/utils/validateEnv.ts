import { cleanEnv } from "envalid";
import { port, str, num } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    NOTION_KEY: str(),
    NOTION_DATABASE: str(),
    PORT: port(),
    SMTP_SERVER_ADDRESS: str(),
    SMTP_PORT: num(),
    SMTP_LOGIN: str(),
    SMTP_PASSWORD: str(),
})