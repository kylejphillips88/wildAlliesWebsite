import { Card } from "react-bootstrap";
import styles from "../styles/UnderConstruction.module.css"

function UnderConstruction(){
    return(
        <div className={styles.backgroundImage}> 
            <div className={styles.body}>
                <img src="/wildAlliesLogo.png" alt="Wild Allies logo"/>
                <Card className={styles.details}>
                <Card.Title><h1>New Website<br/>Under Construction</h1></Card.Title>
                <h3>Contact us via email</h3>
                <h3>wildalliesevents@gmail.com</h3>
                </Card>
            </div>
        </div>
    )
}

export default UnderConstruction;