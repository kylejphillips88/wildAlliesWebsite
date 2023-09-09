import { Button, Form, Modal } from "react-bootstrap";
import styles from "../styles/home.module.css";
import TextInputField from "./TextInputField";
import { MailingListDetails } from "../network/functions_api";
import * as FunctionsApi from "../network/functions_api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MailingList } from "../models/mailingList";
import SignedUpModal from "./SignedUpModal";

interface AddSignUpDetailsProps {
    onDismiss: () => void,
    onSignUpSaved: (details: MailingList) => void,
}

const AddSignUpDetails = ({onDismiss, onSignUpSaved}: AddSignUpDetailsProps) => {
    const [showSignedUpModal, setShowSignedUpModal] = useState(false); 

    const { register, handleSubmit, formState : {errors, isSubmitting} } = useForm<MailingListDetails>({});

    async function onSubmit(signUpDetails: MailingListDetails) {
        try {
            let signUpResponse: MailingList;
            signUpResponse = await FunctionsApi.fetchMailingList(signUpDetails);
            onSignUpSaved(signUpResponse);
            onSignUpSuccess();
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    async function onSignUpSuccess() {
        setShowSignedUpModal(true);
    }

    return(
        <div>
        <Modal show onHide={onDismiss} className="modal-lg" id="connectPopUp">
            <Modal.Header closeButton className={styles.connectPopUpBox}>
            <div className={styles.connectPopUpTitle}><h3>Join Our Mailing List!</h3></div>
            </Modal.Header>
            <Modal.Body className={styles.connectPopUpBox}>
                <div className={styles.connectPopUpMessage}>
                    
                    <div className={styles.connectPopUpText}><p>Be the first to hear about upcoming experiences and events!</p></div>
                    <div>
                        <img src="/wildAlliesLogo.png" 
                        alt="Wild Allies" 
                        className={styles.connectPopUpLogo}
                        />
                    </div>    
                </div>
                <div className={styles.connectPopUpForm}>
                    <Form id="connectRequest" onSubmit={handleSubmit(onSubmit)}>
                        <TextInputField
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            register={register}
                            registerOptions={{ required: "Please enter your name."}}
                            error={errors.name}
                        />
                        <TextInputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            register={register}
                            registerOptions={{ required: "Please enter your email address."}}
                            error={errors.emailAddress}
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
            showSignedUpModal &&
            <SignedUpModal
                onDismiss={() => {
                    setShowSignedUpModal(false)
                    window.location.reload();
                }}
            />
        }
        </div>
    )
}

export default AddSignUpDetails;