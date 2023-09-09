import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";
import flora1 from "../assets/flora1.jpg";

const What = () => {
    return (
        <div id="what" className={styles.background}>
            <Navbar className={styles.sectionHeaders}><h1>What</h1></Navbar>
            <Container className={styles.outerContainer}>
                <div className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                    <p>We curate opportunities for people and organisations to deeply connect with each other, to nature, to learn and create ideas for our future resilience, both locally and globally.<br/>We activate spaces that let you get to know yourself better and connect you with a network of like-minded people who want to act.<br/>We, along with the help of some extraordinary people, help you to develop environmental knowledge and leadership skills that support you in your everyday life and also equip your business to support a future for people and the planet.<br/>We do this through a range of curated offerings:</p>
                    <ul>
                        <li>Adventure/ sports based six day camps</li>
                        <li>Intentional team planning retreats (ranging in duration)</li>
                        <li>Sustainability teams/ executives retreats</li>
                    </ul>
                </div>
                <img className={`${styles.teamPhoto} ${styles.photoContainer}`} src={flora1} alt="Footprints event" />
            </Container>
        </div>
    )
}

export default What;