import { Modal } from "react-bootstrap"

interface MessageSentModalProps {
    onDismiss: () => void,
}

const ConnectRequestReceived = ({onDismiss}: MessageSentModalProps) => {
    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you for reaching out!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Thank you so much for getting in touch with us. We'll be sure to respond to you asap!</p>
            </Modal.Body>
        </Modal>
    )
}

export default ConnectRequestReceived;