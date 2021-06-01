import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ToDoTable from './ToDoTable';
import Timer from './Timer';
import ToDoCreationModal from './form/ToDoCreationModal';
import { TODO_API_URL } from '../constants';
class StudyTimer extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.getItens();
    }
    getItens = async () => {
        //fetch('users')
        //  .then(res => res.json())
        //  .then(res => this.setState({ items: res }))
        //      .catch(err => console.log(err));
        const response = await fetch(`${TODO_API_URL}`); //fetch('users');
        const data = await response.json();
        this.setState({ items: data });
    }
    addToDoToState = todo => {
    }
    updateState = (id) => {
        this.getItens();
    }
    deleteItemFromState = id => {
    }
    render() {
        return <Container>
        <Timer />
        <Container style={{ paddingTop: "50px" }}>
            <Row>
                <Col>
                    <ToDoTable
                            items={this.state.items}
                            updateState={this.updateState}
                            addToDoToState={this.addToDoToState}
                            deleteItemFromState={this.deleteItemFromState} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ToDoCreationModal isNew={true} addToDoToState={this.addToDoToState} />
                </Col>
            </Row>
            </Container>
        </Container >;
    }
}
//<RegistrationModal isNew={true} addUserToState={this.addUserToState} />
export default StudyTimer;