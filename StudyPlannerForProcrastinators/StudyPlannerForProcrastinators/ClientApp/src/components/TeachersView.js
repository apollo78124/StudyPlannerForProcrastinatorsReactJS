import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import StudentProgressTable from './StudentProgressTable';
import Timer from './Timer';
import ToDoCreationModal from './form/ToDoCreationModal';
import { TODO_API_URL } from '../constants';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class TeachersView extends Component {
    state = {
        items: [],
        iteration: 0,
        title: "",
        todoId: 0,
        goal: "",
        timeSpent: 0,
        comment: ""
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
        this.setState(previous => ({
            items: [...previous.items, todo]
        }));
    }

    updateState = (id) => {
        this.getItens();
    }

    updateIterationAndTime = () => {

        fetch(`${TODO_API_URL}/${this.state.todoId}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                goal: this.state.goal,
                timeSpent: this.state.timeSpent + 25,
                iterationsSpent: this.state.iteration,
                comment: this.state.comment
            })
        })
            .then(() => {
                this.updateState(this.state.todoId);
            })
            .catch(err => console.log(err));
    }

    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }

    handleOnIt = (todo) => {
        this.setState({
            iteration: todo.iterationsSpent + 1,
            title: todo.title,
            todoId: todo.id,
            goal: todo.goal,
            timeSpent: todo.timeSpent,
            comment: todo.comment
        });
    }

    render() {
        return <Container style={{ paddingTop: "20px" }}>
                <Row>
                    <Col>
                    <StudentProgressTable
                            items={this.state.items}
                            updateState={this.updateState}
                            addToDoToState={this.addToDoToState}
                            handleOnIt={this.handleOnIt}
                            deleteItemFromState={this.deleteItemFromState} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ToDoCreationModal isNew={true} addToDoToState={this.addToDoToState} />
                    </Col>
                </Row>
            </Container>;
    }
}
//<RegistrationModal isNew={true} addUserToState={this.addUserToState} />
export default TeachersView;