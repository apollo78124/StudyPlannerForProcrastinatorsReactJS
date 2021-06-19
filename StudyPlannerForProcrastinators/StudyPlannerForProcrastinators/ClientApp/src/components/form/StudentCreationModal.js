import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import StudentCreationForm from './StudentCreationForm';
class StudentCreationModal extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }
    render() {
        const isNew = this.props.isNew;
        let title = 'Edit Student Info';
        let button = '';
            button = <Button
                color="warning"
                onClick={this.toggle}>Edit</Button>;
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <StudentCreationForm
                        addToDoToState={this.props.addToDoToState}
                        updateToDoIntoState={this.props.updateToDoIntoState}
                        toggle={this.toggle}
                        student={this.props.student} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default ToDoCreationModal;