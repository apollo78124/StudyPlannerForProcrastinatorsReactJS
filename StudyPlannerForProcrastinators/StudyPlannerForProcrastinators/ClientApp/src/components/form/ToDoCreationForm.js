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
    }

    onChangeNumber = e => {
    }

    render() {
        return <Form>
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