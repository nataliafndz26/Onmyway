import { Modal } from 'react-bootstrap'

const PopUp = ({ show, onHide, children }) => {
    return (

        <Modal show={show} onHide={onHide}>
            <Modal.Body>
                {children}
             </Modal.Body>
        </Modal>

    )
}

export default PopUp