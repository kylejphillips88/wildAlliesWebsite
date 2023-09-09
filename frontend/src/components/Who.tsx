import { Container, Navbar } from "react-bootstrap";
import team1 from "../assets/team1.jpg";
import styles from "../styles/ourwhy.module.css";

const Who = () => {
    return (
        <div id="who" className={styles.background}>
            <Navbar className={styles.sectionHeaders}><h1>Who</h1></Navbar>
            <Container className={styles.outerContainer}>
                <div  className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                    <p>What happens when you combine a few good folk working to save a Tassie wild icon, in a local pub with a bar full of $5 wines, and a jukebox playing 80s Australian anthems?<br/>It seems the answer is ‘Wild Allies’!<br/>These were the exact ingredients that resulted in Jo Edwards, Jess Ewing and Simon Harris imagining and forming their first event in the Great Forest, Victoria back in early 2023.<br/>After many years working for purpose-driven organisations and events across the globe, Jess, Jo and Simon sought to imagine and create a business that could ignite people's passion and connection to nature so they value what needs to be protected.<br/>Simon, Jo and Jess’ ultimate goal is to curate experiences where friends and strangers can deeply connect with nature, whilst also spending time learning, laughing and enjoying precious time out in the wild together!</p>
                </div>
                    <img className={styles.photoContainer} src={team1} alt="Wild Allies Team"/>
            </Container>
        </div>
    )
}

export default Who;