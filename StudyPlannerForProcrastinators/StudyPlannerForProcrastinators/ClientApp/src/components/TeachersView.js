import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import StudentProgressTable from './StudentProgressTable';
import Timer from './Timer';
import ToDoCreationModal from './form/ToDoCreationModal';
import { TODO_API_URL, TCV_API_URL } from '../constants';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class TeachersView extends Component {
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
        const response = await fetch(`${TCV_API_URL}`); //fetch('users');
        const data = await response.json();
        this.setState({ items: data });
    }
    addToDoToState = todo => {
        this.setState(previous => ({
            items: [...previous.items, todo]
        }));
    }

    updateState = (id) => {
        this.getItens();
    }

    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }

    render() {
        return <Container style={{ paddingTop: "20px" }}>
                <Row>
                    <Col>
                    <StudentProgressTable
                            items={this.state.items}
                            updateState={this.updateState}
                            addToDoToState={this.addToDoToState}
                            deleteItemFromState={this.deleteItemFromState} />
                    </Col>
                </Row>
            </Container>;
    }
}
//<RegistrationModal isNew={true} addUserToState={this.addUserToState} />
export default TeachersView;