import { Button, Card, Container, Form } from "react-bootstrap";
import styles from "../styles/contactus.module.css";
import { useState } from "react";
import MessageSentModal from "../components/MessageSentModal";





function ContactUs(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showMessageSentModal, setShowMessageSentModal] = useState(false);
    

    async function onSubmit() {
        try {
            fetch("http://localhost:5000/api/contactus",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                })
            }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
        } catch (error) {
            console.error(error);
        }
    }

    async function onMessageSent() {
        setShowMessageSentModal(true);
    }

    return(
        <div className={styles.background}>
            <Container className={styles.topRow}>
                    <div className={styles.titleDescription}>
                        <h1>Contact Us</h1>
                        <h3>Reach out if you're interested in having Wild Allies plan your next fundraising event.</h3>
                    </div>
                <Card className={styles.contactMessageBox}>
                    <Form id="contactUsForm">
                        <Form.Control 
                            className={styles.inputArea} 
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                        />
                        <Form.Control
                            className={styles.inputArea} 
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                        <Form.Control 
                            className={styles.inputArea} 
                            name="message"
                            as="textarea"
                            rows={4}
                            placeholder="Write your message here..."
                            onChange={(e) => setMessage(e.target.value)}
                            required={true}
                        />
                    </Form>
                    <Button 
                    className={styles.navbarButtons}
                    onClick={() => {
                        onSubmit();
                        onMessageSent();
                    }}
                    >
                        Submit
                    </Button>
                </Card>
            </Container>
            {
                showMessageSentModal &&
                <MessageSentModal
                    onDismiss={() => {
                        setShowMessageSentModal(false)
                        window.location.reload();
                    }}
                />
            }
        </div>
    )
}

export default ContactUs;