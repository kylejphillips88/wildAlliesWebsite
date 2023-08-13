import { Modal } from "react-bootstrap"

interface SignedUpModalProps {
    onDismiss: () => void,
}

const SignedUpModal = ({onDismiss}: SignedUpModalProps) => {
    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>We'll be in touch with information about how we can fight climate change together, as well as our upcoming events and experiences and how you can get involved.</p>
            </Modal.Body>
        </Modal>
    )
}

export default SignedUpModal;