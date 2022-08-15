import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { TODO_API_URL } from '../../constants';
class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    logInUser = e => {
        e.preventDefault();
        var data = {
            username: this.state.username,
            password: this.state.password
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

    render() {
        return <div class="login">
                    <Form onSubmit={this.logInUser}>
                        <FormGroup>
                            <Label for="username">Username:</Label>
                            <Input type="text" name="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" />
                        </FormGroup>
                        <Button>Login</Button>
                    </Form>
                    <br />
                </div>
    }
}
export default LoginForm;