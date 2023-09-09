import { Button, Navbar } from "react-bootstrap";
import styles from "../styles/footer.module.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {

    return (
        <div>
            <Navbar className={styles.footer} expand="lg">
                <div className={styles.footerColumn}> 
                    <div className={styles.footerRow}>
                            <Navbar.Brand>
                                <img
                                src="/footerLogo.png" 
                                alt="Wild Allies" 
                                className={styles.footerLogo}/>
                            </Navbar.Brand>
                        <div className={styles.footerAddress}>
                            <p>P.O. Box 1221</p>
                            <p>Strathalbyn</p>
                            <p>South Australia 5255</p>
                        </div>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id="main-navbar">
                    <div className={styles.buttonsLayout}>
                        <div className={styles.footerColumn}>
                        <a className="nav-link js-scroll-trigger" href="#home">
                                <Button
                                className={styles.navbarButtons}>
                                    Home
                                </Button>
                            </a>
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
                            </div>
                            <div className={styles.footerColumn}>
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
                                    <Button className={styles.navbarButtons}>
                                        Connect
                                    </Button>
                                </a>
                            </div>
                        <Button className={styles.navbarButtons}>
                            <SocialIcon 
                                url="https://www.instagram.com/wild.allies/"
                                bgColor="white"
                            />
                        </Button>
                        <Button className={styles.navbarButtons}>
                            <SocialIcon
                            url="https://www.linkedin.com/in/jo-edwards-1723b0255"
                            bgColor="white"
                            />
                        </Button>    
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <Navbar className={styles.footerAcknowledgement}>
                <p>Wild Allies would like to acknowledge Australia's First Nation people, as the traditional custodians of the land, sea and sky and sovereignty has never been ceded. To the Elder's - past and present. Your anchored knowledge guides our journey. To the emerging leaders whose unwavering commitment to rise above and succeed, inspire us to be the change. To the Indigenous children you are continuum of your ancient culture. You are the future leaders and deadly dreamers.</p>
            </Navbar>
        </div>
    )
}

export default Footer;