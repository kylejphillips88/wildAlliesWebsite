import { Container } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";
import running1 from "../assets/running1.jpg"

const How = () => {
    return (
        <Container className={styles.outerContainer2}>
            <div id="how" className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                <h1>How<hr/></h1>
                <p>We do this by connecting you with local organisations, scientists, ecologists, supply chains and local First Nations people that are active in conserving and protecting our natural world.<br/>Here's how:</p>
                <ul>
                    <li>You identify a strategy, problem or challenge you want to work through both personally or within your business that is a climate-related problem, and/or a sustainable business opportunity </li>
                    <li>Your project, idea, campaign can be an small seed, or a fully-fledged strategy</li>
                    <li>With expert help through mentors, presenters and active hands on local experiences, we develop your idea into a measurable collective climate-action project</li>
                    <li>We provide personal and professional support to prepare you and to ensure that ideas and plans become a reality </li>
                </ul>
            </div>
            <div>
            <img className={`${styles.teamPhoto} ${styles.photoContainer}`} src={running1} alt="Footprints event" />
            </div>
        </Container>
    )
}

export default How;