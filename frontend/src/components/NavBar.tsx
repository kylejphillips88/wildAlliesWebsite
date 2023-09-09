import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import ConnectPopUp from "./ConnectPopUp";
import { MailingList } from "../models/mailingList";

const NavBar = () => {
    const [showConnectPopUp, setShowConnectPopUp] = useState(false);

    return (
        <div className={styles.navbarCover}>
        <Navbar className={styles.navbar} expand="lg">
                <Navbar.Brand>
                    <img
                    src="/wildAlliesLogo.png" 
                    alt="Wild Allies" 
                    className={styles.navbarLogo}/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar"/>
            <Navbar.Collapse id="main-navbar">
                <div className={styles.buttonsLayout}>
                    <a className="nav-link js-scroll-trigger" href="#why">
                        <Button
                        className={styles.navbarButtons}>
                            Why
                        </Button>
                    </a>
                    <a className="nav-link js-scroll-trigger" href="#what">
                        <Button
                        className={styles.navbarButtons}>
                            What
                        </Button>
                    </a>
                    <a className="nav-link js-scroll-trigger" href="#how">
                        <Button className={styles.navbarButtons}>
                            How
                        </Button>
                    </a>
                    <a className="nav-link js-scroll-trigger" href="#projects">
                        <Button className={styles.navbarButtons}>
                            Projects
                        </Button>
                    </a>
                    <a className="nav-link js-scroll-trigger" href="#who">
                        <Button className={styles.navbarButtons}>
                            Who
                        </Button>
                    </a>
                    <a className="nav-link js-scroll-trigger" href="#connect">
                        <Button 
                        className={styles.navbarButtons}>
                            Connect
                        </Button>
                    </a>
                </div>
            </Navbar.Collapse>
        </Navbar>
        {showConnectPopUp && 
            <ConnectPopUp
                onDismiss={() => {
                    setShowConnectPopUp(false);
                }}
                onSignUpSaved={(details: MailingList) => {}}
            />
        }
        </div>
        
    )
}

export default NavBar;