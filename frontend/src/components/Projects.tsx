import { Container } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";

const Projects = () => {
    return (
        <Container className={styles.outerContainer}>
            <div id="projects" className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                <h1>A recent project: Footprints Australia<hr/></h1>
                <p>In April 2023, Wild Allies launched Footprints Australia, that brought trail runners together for five days in the Central Highlands of Victoria. 12 exceptional participants bonded and  developed environmental knowledge and leadership skills, and connect with grassroots organisations and localised projects that are active in conserving and protecting wild lands under the Great Forest National Park Proposal.<br/>Each morning was spent running or hiking,  under towering eucalyptus and glistening tree ferns, with afternoons and evenings workshopping ideas into tangible projects through immersive, collaborative sessions.<br/>In partnership with Patagonia, the campers imagined and developed projects to protect the Great Forest that far exceeded our expectations. These projects were aided by great mentors:</p>
                <ul>
                    <li>Award winning filmmaker, Beau Miles</li>
                    <li>WWF Threatened Species and Climate Adaptation Ecologist Dr Kita Ashman</li>
                    <li>New world crafter and Co-creator of the bestseller book -The Great Forest- Sarah Rees</li>
                    <li>Product and service innovator, trail runner and mentor -  Kernow Craig</li>
                    <li>Majell Backhausen, Sports Community Manager, Patagonia</li>
                </ul>
            </div>
            <iframe
                title="footprintsVideo"
                className={styles.video}
                src="https://www.youtube.com/embed/dG6MgDGiJsw?controls=0"
            />
        </Container>
    )
}

export default Projects;