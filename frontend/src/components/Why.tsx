import styles from "../styles/ourwhy.module.css"
import { Container, Navbar } from "react-bootstrap";
import tree2 from "../assets/tree2.jpg"

const Why= () => {

    return(
        <div id="why" className={styles.background}>
            <Navbar className={styles.sectionHeaders}><h1>Why</h1></Navbar>
            <Container className={styles.outerContainer}>
            <div className={`${styles.ourWhyText} ${styles.orangeContainer}`}>
                <p>To create the world we know we need in the coming years, we need bold new approaches and transformative ways of working together.<br/>
                We’re facing a series of challenges we haven’t had to collectively face before. People are overstimulated, distracted and exhausted and simply don’t have the bandwidth to solve these problems.<br/>Wild Allies exist to take amazing people into nature to connect and create bold new ideas for a better future and ultimately change our natural world for the better.<br/>Why do we choose to host our experiences in nature?<br/>We purposefully hold our curated events in locations with limited phone service and no internet service; all the better to foster deep conversations and real connections.<br/>Visiting and spending time in a wild place in a development context broadens the awareness of our participants. Being detached from familiar surroundings provides insight and perspective, enabling you to return home with a much clearer focus and understanding of your purpose and what is important to you.</p>
            </div>
            <img className={styles.photoContainer} src={tree2} alt="Footprints event" />
            </Container>
        </div>
    )
}

export default Why;