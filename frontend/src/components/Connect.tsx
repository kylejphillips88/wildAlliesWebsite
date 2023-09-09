import { Button, Card, Container, Form, Navbar } from "react-bootstrap";
import styles from "../styles/ourwhy.module.css";
import styles2 from "../styles/home.module.css";
import { useState } from "react";
import MessageSentModal from "./MessageSentModal";
import { ConnectDetails } from "../models/connect";
import * as FunctionsApi from "../network/functions_api";
import TextInputField from "./TextInputField";
import { useForm } from "react-hook-form";

interface AddConnectDetailsProps {
    onDismiss: () => void,
    onDetailsSent: (details: ConnectDetails) => void,
}

const Connect = ({onDismiss, onDetailsSent}: AddConnectDetailsProps) => {
    const [showMessageSentModal, setShowMessageSentModal] = useState(false);

    const { register, handleSubmit, formState : {errors, isSubmitting} } = useForm<ConnectDetails>({});

    async function onSubmit(connectDetails: ConnectDetails) {
        try {
            let connectResponse: ConnectDetails;
            connectResponse = await FunctionsApi.fetchConnectRequest(connectDetails);
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
        <div id="connect" className={styles.connectBackground}>
            <Navbar className={styles.sectionHeaders}><h1>Connect</h1><br/></Navbar>
            <Container className={styles.topRow}>
                <div  className={styles.titleDescription}> 
                    <p>Are you ready to enhance your impact and make a difference to the people you lead, your organisation, your community and the wider world?<br/><br/>Let's talk!</p>
                    <div>
                        <img src="/wildAlliesLogo.png" 
                        alt="Wild Allies" 
                        className={styles2.connectPopUpLogo}
                        />
                    </div>
                    <div>
                        <p>Simon Harris<br/>simon@wildallies.com.au<br/>+61 406 337 399</p>
                    </div>
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
                            name="company"
                            label="Company"
                            type="text"
                            placeholder="Company"
                            register={register}
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
                            name="phone"
                            label="Phone Number"
                            type="text"
                            placeholder="Phone"
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