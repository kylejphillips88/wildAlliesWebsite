import nodemailer from 'nodemailer';
import env from "./utils/validateEnv";
import express, { RequestHandler } from 'express';

const config = {
    host: env.SMTP_SERVER_ADDRESS,
    port: env.SMTP_PORT,
    secure: false,
    auth: {
        user: env.SMTP_LOGIN,
        pass: env.SMTP_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(config);

interface ConnectBody {
    name?: string,
    company?: string,
    email?: string,
    phone?: string,
}

export const connectRequest: RequestHandler<unknown, unknown, ConnectBody, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const company = req.body.company;
    const email = req.body.email;
    const phone = req.body.phone;
    try {
        if (!name || !email){
            throw Error("Form missing required parameters.")
        }
        const response = await transporter.sendMail({
            "from": email,
            "to": "jess@wildallies.com.au, simon@wildallies.com.au",
            "subject": `Connect request received`,
            "text": `<p>You have received a connect request from Wild Allies website.<p/>
            <p>Entered details are as follows.</p>
            <p>Name: ${name}<p/>
            <p>Company: ${company}<p/>
            <p>Email Address: ${email}<p/>
            <p>Phone Number: ${phone}<p/>`
        });
        res.status(200).json(response);
    }
    catch (error){
        next(error)
    }
}


const router = express.Router();

router.post("/connectrequest", connectRequest);

export default router;