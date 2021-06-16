import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ToDoTable from './ToDoTable';
import Timer from './Timer';
import ToDoCreationModal from './form/ToDoCreationModal';
import { TODO_API_URL } from '../constants';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class StudyTimer extends Component {
    state = {
        items: [],
        iteration: 0,
        title: "",
        todoId: 0,
        goal: ""
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

    updateIterationAndTime = (id) => {

        fetch(`${TODO_API_URL}/${this.state.currentTodo.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.currentTodo.title,
                goal: this.state.currentTodo.goal,
                timeSpent: this.state.currentTodo.timeSpent + 25,
                iterationsSpent: this.state.currentTodo.iterationsSpent + 1,
                comment: this.state.currentTodo.comment
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateToDoIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }

    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }

    handleOnIt = (todo) => {
        this.setState({
            iteration: ++todo.iterationsSpent,
            title: todo.title,
            todoId: todo.id,
            goal: todo.goal
        });
    }

    render() {
        return <Container>
            <Timer />
            <br />
            <p className="text-dark">One Iteration is 25 minutes. Ideally, one ToDo should be done within 4 to 6 iterations.</p>
            <p className="text-dark"><b>Current Iteration: {this.state.iteration}</b><br />of ToDo {this.state.todoId}: <b>{this.state.title}</b><br />Goal: {this.state.goal}</p>
            <Container style={{ paddingTop: "50px" }}>
                <Row>
                    <Col>
                        <ToDoTable
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
            </Container>
        </Container >;
    }
}
//<RegistrationModal isNew={true} addUserToState={this.addUserToState} />
export default StudyTimer;