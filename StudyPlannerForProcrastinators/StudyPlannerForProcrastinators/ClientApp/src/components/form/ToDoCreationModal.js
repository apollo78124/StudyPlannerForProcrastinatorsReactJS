import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ToDoCreationForm from './ToDoCreationForm';
class ToDoCreationModal extends Component {
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
        let title = 'Edit ToDo';
        let button = '';
        if (isNew) {
            title = 'Add ToDo';
            button = <Button
                color="success"
                onClick={this.toggle}>Add New</Button>;
        } else {
            button = <Button
                color="warning"
                onClick={this.toggle}>Edit</Button>;
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <ToDoCreationForm
                        addToDoToState={this.props.addToDoToState}
                        updateToDoIntoState={this.props.updateToDoIntoState}
                        toggle={this.toggle}
                        todo={this.props.todo} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default ToDoCreationModal;