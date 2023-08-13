import { Button, Form } from "react-bootstrap";
import styles from "../styles/home.module.css";
import { useState } from "react";
import SignedUpModal from "./SignedUpModal";
import { MailingList } from "../models/mailingList";
import { useForm } from "react-hook-form";
import { MailingListDetails } from "../network/functions_api";
import * as FunctionsApi from "../network/functions_api";
import TextInputField  from "./TextInputField";

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
        } catch (error) {
            console.error(error);
            alert(error);
        }
        onSignUpSuccess();
    }

    async function onSignUpSuccess() {
        setShowSignedUpModal(true);
    }

    return(
            <div className={styles.mailingList}>
                <h1>Join Our Mailing List</h1>
                <h3>Be the first to hear about upcoming experiences and events!</h3>
                <Form id="mailingListForm" onSubmit={handleSubmit(onSubmit)} className={styles.mailingListForm}>
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
                        name="emailAddress"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        register={register}
                        registerOptions={{ required: "Please enter a valid email address."}}
                        error={errors.emailAddress}
                    />
                    <Button className={styles.mailingListButton}
                        type="submit"
                        form="mailingListForm"
                        disabled={isSubmitting}
                    >
                        Sign up
                    </Button>
                </Form>
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