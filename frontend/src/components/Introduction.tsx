import { Container } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";

const Introduction = () => {
    return(
        <Container className={`${styles.outerContainer} ${styles.orangeContainer} ${styles.introduction}`}>
            <p>
            Hi, we’re Wild Allies.<br/><br/>
            We’re a small group of tree loving adventurers who are obsessed with getting people into wild places.<br/>
            Through our business, we create safe, fun, explorative, peer learning and participatory spaces in nature.  We do this to activate people’s love and appreciation of the wild in order to move them to act to change our natural world for the better.<br/>
            We draw from our time working with leaders and teams at purpose-driven organisations, our experience helping to build million dollar campaigns/ events and the over 100s of people we’ve helped to move to action to date.
            </p>
        </Container>
    )
}

export default Introduction;