import { MailingList } from "../models/mailingList";
import AddSignUpDetails from "./ConnectPopUp";
import React, { useEffect, useState} from "react";

const ScrollTrigger = () => {

    const [showConnectPopUp, setShowConnectPopUp] = useState(false);
    const [connectPopUpShown, setConnectPopUpShown] = useState(false);

    useEffect(() => {
        if(!connectPopUpShown){
        const timer = setTimeout(() => {
            setShowConnectPopUp(true);
            setConnectPopUpShown(true);
              }, 5000);
        return () => clearTimeout(timer);
        }
    });


    return(
        <div>
            {showConnectPopUp && 
            <AddSignUpDetails
                onDismiss={() => {
                    setShowConnectPopUp(false);
                }}
                onSignUpSaved={(details: MailingList) => {}}
            />
            }   
        </div>
    )
}

export default ScrollTrigger;