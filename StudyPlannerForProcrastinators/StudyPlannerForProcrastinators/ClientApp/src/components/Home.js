import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import '../css/home.css';
import LoginForm from './form/LoginForm';

export class Home extends Component {
    static displayName = Home.name;

    loginUser(e) {
        debugger;
        console.log("hi");
    }

    render() {
        return (
            <div className="home-page-v1">
                    <div className="intro">
                        <h1>Hello, Procrastinators!</h1>
                    <h4>Welcome to StudyPlannerForProcrastinators aka SPFP.<br />We will try to stop you from procrastinating.</h4>
                    <br />
                        <p>Study and work using this study planner:</p>
                        <ul>
                            <li><strong>ToDo List & Timer</strong> <br /> Study as if you are working out. <br />Make a list of ToDo which you can finish within 2 hours. <br />Using our timer, focus for 25 minutes (1 iteration) on one ToDo only. <br />Rest for 5 minutes. Start another iteration. <br />By the time you are at 5~8 iterations of each ToDo, it will be finished.</li> <br />
                            <li><strong>Project / Assignment / Course Progress Report</strong>  <br /> As you keep using the timer, SPFP will keep track of how much time you spent on studying.  <br /> You can view your progress on courses, projects, and assignments.</li> <br />
                            <li><strong>Connect</strong> <br /> SPFP provides a community where you can connect with people in your own school. <br /> Sign up now and share tips and reviews on courses, profs, buildings. </li>
                        </ul>
                </div>
                <LoginForm />
            </div>
        );
    }
}
