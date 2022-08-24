import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LOGIN_API_URL } from '../../constants';
class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    logInUser = e => {
        var data = {
            username: this.state.username,
            password: this.state.password
        };
        const dataInJson = JSON.stringify(data);
        
        fetch(`${LOGIN_API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: dataInJson
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    render() {
        return <div className="login">
                    <Form onSubmit={this.logInUser}>
                        <FormGroup>
                            <Label for="username">Username:</Label>
                            <Input type="text" name="username" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" onChange={this.onChange}/>
                        </FormGroup>
                        <Button className="login-button" type="button" onClick={() => this.logInUser()}>Login</Button>
                    </Form>
                    <br />
                </div>
    }
}
export default LoginForm;