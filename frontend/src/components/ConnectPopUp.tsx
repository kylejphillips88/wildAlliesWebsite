import { Button, Form, Modal } from "react-bootstrap";
import styles from "../styles/home.module.css";
import TextInputField from "./TextInputField";
import { ConnectPopUpDetails } from "../models/connectPopUp";
import { ConnectRequestDetails } from "../network/functions_api";
import * as FunctionsApi from "../network/functions_api";
import { useForm } from "react-hook-form";
import ConnectRequestReceived from "./ConnectRequestReceivedModal";
import { useState } from "react";

interface ConnectPopUpProps {
    onDismiss: () => void,
    onDetailsSent: (details: ConnectPopUpDetails) => void,
}

const ConnectPopUp = ({onDismiss, onDetailsSent}: ConnectPopUpProps) => {
    
    const [showRequestReceivedModal, setShowRequestReceivedModal] = useState(false);

    const {register, handleSubmit, formState : {errors, isSubmitting} } = useForm<ConnectRequestDetails>({});

    async function onSubmit(connectDetails: ConnectRequestDetails) {
        try {
            let connectResponse: ConnectPopUpDetails;
            connectResponse = await FunctionsApi.fetchConnectRequest(connectDetails);
            onDetailsSent(connectResponse);    
            onRequestSent();
        } catch (error) {
            console.error(error);
        }
    }

    async function onRequestSent(){
        setShowRequestReceivedModal(true);
    }

    return(
        <div>
        <Modal show onHide={onDismiss} className="modal-lg" id="connectPopUp">
            <Modal.Header closeButton className={styles.connectPopUpBox}>
            </Modal.Header>
            <Modal.Body className={styles.connectPopUpBox}>
                <div className={styles.connectPopUpMessage}>
                    <p>Are you ready to enhance your impact and make a difference to the people you lead, your organisation, your community and the wider world?<br/><br/>Let's talk!</p>
                    <div>
                        <img src="/wildAlliesLogo.png" 
                        alt="Wild Allies" 
                        className={styles.connectPopUpLogo}
                        />
                    </div>
                    <div>
                        <p>Simon Harris<br/>simon@wildallies.com.au<br/>+61 406 337 399</p>
                    </div>
                    </div>
                <div className={styles.connectPopUpForm}>
                    <Form id="connectRequest" onSubmit={handleSubmit(onSubmit)}>
                        <TextInputField
                            name="name"
                            type="text"
                            placeholder="Name"
                            register={register}
                            registerOptions={{ required: "Please enter your name."}}
                            error={errors.name}
                        />
                        <TextInputField
                            name="company"
                            type="text"
                            placeholder="Company"
                            register={register}
                        />
                        <TextInputField
                            name="email"
                            type="email"
                            placeholder="Email"
                            register={register}
                            registerOptions={{ required: "Please enter your email address."}}
                            error={errors.email}
                        />
                        <TextInputField
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            register={register}
                        />
                    </Form>
                    <Button 
                        className={styles.connectPopUpButton}
                        type="submit"
                        form="connectRequest"
                        disabled={isSubmitting}
                        >
                            Submit
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.connectPopUpBox}/>
        </Modal>
        {
            showRequestReceivedModal &&
            <ConnectRequestReceived
                onDismiss={() => {
                    setShowRequestReceivedModal(false)
                    onDismiss();
                }}
            />
        }
        </div>
    )
}

export default ConnectPopUp;