import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";
import flora2 from "../assets/flora2.jpg"

const How = () => {
    return (
        <div id="how" className={styles.background}>
            <Navbar className={styles.sectionHeaders}><h1>How</h1></Navbar>
            <Container className={styles.outerContainer}>
                <div  className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                    
                    <p>We do this by connecting you with local organisations, scientists, ecologists, supply chains and local First Nations people that are active in conserving and protecting our natural world.<br/>Here's how:</p>
                    <ul>
                        <li>You identify a strategy, problem or challenge you want to work through both personally or within your business that is a climate-related problem, and/or a sustainable business opportunity </li>
                        <li>Your project, idea, campaign can be an small seed, or a fully-fledged strategy</li>
                        <li>With expert help through mentors, presenters and active hands on local experiences, we develop your idea into a measurable collective climate-action project</li>
                        <li>We provide personal and professional support to prepare you and to ensure that ideas and plans become a reality </li>
                    </ul>
                </div>
                <img className={styles.photoContainer} src={flora2} alt="Footprints event" />
            </Container>
        </div>
    )
}

export default How;