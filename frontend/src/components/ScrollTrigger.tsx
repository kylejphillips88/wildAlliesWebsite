import { ConnectPopUpDetails } from "../models/connectPopUp";
import ConnectPopUp from "./ConnectPopUp";
import React, { useEffect, useState} from "react";

const ScrollTrigger = () => {

    const [showConnectPopUp, setShowConnectPopUp] = useState(false);
    const [connectPopUpShown, setConnectPopUpShown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById('connect');
            if (targetElement && !connectPopUpShown) {
              if (window.scrollY > targetElement.offsetTop - 300) {
                setShowConnectPopUp(true);
                setConnectPopUpShown(true);
              }
            }
          };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return(
        <div>
            {showConnectPopUp && 
            <ConnectPopUp
                onDismiss={() => {
                    setShowConnectPopUp(false);
                }}
                onDetailsSent={(details: ConnectPopUpDetails) => {}}
            />
            }   
        </div>
    )
}

export default ScrollTrigger;