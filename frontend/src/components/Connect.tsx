import { Button, Card, Container, Form } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";
import { useState } from "react";
import MessageSentModal from "./MessageSentModal";
import { ConnectDetails } from "../models/connect";
import { ConnectMessageDetails } from "../network/functions_api";
import * as FunctionsApi from "../network/functions_api";
import TextInputField from "./TextInputField";
import { useForm } from "react-hook-form";

interface AddConnectDetailsProps {
    onDismiss: () => void,
    onDetailsSent: (details: ConnectDetails) => void,
}

const Connect = ({onDismiss, onDetailsSent}: AddConnectDetailsProps) => {
    const [showMessageSentModal, setShowMessageSentModal] = useState(false);

    const { register, handleSubmit, formState : {errors, isSubmitting} } = useForm<ConnectMessageDetails>({});

    async function onSubmit(connectDetails: ConnectMessageDetails) {
        try {
            let connectResponse: ConnectDetails;
            connectResponse = await FunctionsApi.fetchConnectMessage(connectDetails);
            onDetailsSent(connectResponse);
        } catch (error) {
            console.error(error);
            alert(error);
        }
        onMessageSent();
    }

    async function onMessageSent() {
        setShowMessageSentModal(true);
    }
    
    return (
        <div className={styles.background}>
            <Container className={styles.topRow}>
                <div id="connect" className={styles.titleDescription}> 
                    <h1>Connect</h1><br/><br/>
                    <h3>Get in touch if have any questions or you would like Wild Allies to plan your next fundraising event!                        </h3>
                </div>
                <Card className={styles.contactMessageBox}>
                    <Form id="connectForm" onSubmit={handleSubmit(onSubmit)}>
                        <TextInputField
                            name="name"
                            label="Name"
                            type="text"
                            placeholder="Name"
                            register={register}
                            registerOptions={{ required: "Please enter your name."}}
                            error={errors.name}
                        />
                        <TextInputField
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            register={register}
                            registerOptions={{ required: "Please enter a valid email address."}}
                            error={errors.email}
                        />
                        <TextInputField
                            name="message"
                            label="Message"
                            as="textarea"
                            rows={4}
                            placeholder="Write your message here..."
                            register={register}
                        />
                    </Form>
                    <Button 
                    className={styles.navbarButtons}
                    type="submit"
                    form="connectForm"
                    disabled={isSubmitting}
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

export default Connect;