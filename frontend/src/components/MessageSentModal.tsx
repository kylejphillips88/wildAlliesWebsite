import { Modal } from "react-bootstrap"

interface MessageSentModalProps {
    onDismiss: () => void,
}

const MessageSentModal = ({onDismiss}: MessageSentModalProps) => {
    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you for your message!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Thank you so much for getting in touch with us. We'll be sure to respond to you asap!</p>
            </Modal.Body>
        </Modal>
    )
}

export default MessageSentModal;