import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { TODO_API_URL } from '../../constants';
class ToDoCreationForm extends React.Component {
    state = {
        id: 0,
        title: '',
        goal: '',
        timeSpent: 0,
        iterationsSpent: 0,
        comment: ''
    }
    componentDidMount() {
        if (this.props.todo) {
            const { id, title, goal, timeSpent, iterationsSpent, comment } = this.props.todo
            this.setState({ id, title, goal, timeSpent, iterationsSpent, comment });
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeNumber = e => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    submitNew = e => {
        e.preventDefault();
        var data = {
            title: this.state.title,
            goal: this.state.goal,
            timeSpent: this.state.timeSpent,
            iterationsSpent: this.state.iterationsSpent,
            comment: this.state.comment
        };
        const dataInJson = JSON.stringify(data);
        fetch(`${TODO_API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: dataInJson
        })
            .then(res => res.json())
            .then(todo => {
                this.props.addToDoToState(todo);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${TODO_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                goal: this.state.goal,
                timeSpent: this.state.timeSpent,
                iterationsSpent: this.state.iterationsSpent,
                comment: this.state.comment
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateToDoIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }

    render() {
        return <Form onSubmit={this.props.todo ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" name="title" onChange={this.onChange} value={this.state.title === '' ? '' : this.state.title} />
            </FormGroup>
            <FormGroup>
                <Label for="goal">Goal:</Label>
                <Input type="text" name="goal" onChange={this.onChange} value={this.state.goal === null ? '' : this.state.goal} />
            </FormGroup>
            <FormGroup>
                <Label for="timeSpent">Time Spent:</Label>
                <Input type="number" name="timeSpent" onChange={this.onChangeNumber} value={this.state.timeSpent === null ? 0 : this.state.timeSpent} />
            </FormGroup>
            <FormGroup>
                <Label for="iterationsSpent">Iterations Spent:</Label>
                <Input type="number" name="iterationsSpent" onChange={this.onChangeNumber} value={this.state.iterationsSpent === null ? 0 : this.state.iterationsSpent} />
            </FormGroup>
            <FormGroup>
                <Label for="comment">Comment:</Label>
                <Input type="text" name="comment" onChange={this.onChange} value={this.state.comment === null ? '' : this.state.comment} />
            </FormGroup>
            <Button>Add to ToDo List</Button>
        </Form>;
    }
}
export default ToDoCreationForm;