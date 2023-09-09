import { ConnectDetails } from "../models/connect";
import { MailingList } from "../models/mailingList";

//error handling function for 400 or 500 response
async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        throw Error(errorMessage);
    }
}

export interface MailingListDetails {
    name: string,
    emailAddress: string,
}

export async function fetchMailingList(signUpDetails: MailingListDetails): Promise<MailingList> {
    const response = await fetchData("https://wabackend.net/api/joinmailinglist",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpDetails)
        });
        return response.json();
}

export interface ConnectRequestDetails {
    name: string,
    company: string,
    email: string,
    phone: string,
}

export async function fetchConnectRequest(connectDetails: ConnectRequestDetails): Promise<ConnectDetails> {
    const response = await fetchData("https://wabackend.net/api/connectrequest",
        {
            method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(connectDetails)
        });
        return response.json();
}