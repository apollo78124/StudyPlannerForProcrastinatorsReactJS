import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import NumberFormat from 'react-number-format';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 25,
            second: 0,
            timerOn: false,
            iteration: 1
        };
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        
    }

    startTimer() {
        
    }

    pauseTimer() {
    }

    stopTimer() {
        
    }

    endOfIteration() {
    }

    render() {
        return <Fragment>
            <Row>
                <Col>
                    <h1 id="timer">
                        {this.state.minute}:<NumberFormat value={this.state.second} displayType={'text'} format="##"/>
                    </h1>
                    <br />
                </Col>
                <Col>
                    <p className="text-dark"><br /><b>Iteration 1</b><br />of ToDo 2: <b>React Assignment 2</b><br />Goal: Make CRUD table for users</p>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Button color="primary" onClick={() => this.startTimer()}>Start Iteration</Button>
                    <Button title="Pause the timer when you want to take a piss." color="danger" onClick={() => this.pauseTimer()}>Pause</Button>
                </Col>
                <Col>
                    <Button title="When you Chicken Out, current iteration stops forever. Time spent in this iteration doesn't get added to the TimeSpent column." color="warning" onClick={() => this.stopTimer()}>Chicken Out</Button>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-dark">One Iteration is 25 minutes. Ideally, one ToDo should be done within 4 to 6 iterations.</p>
                </Col>
            </Row>
            
        </Fragment>;
    }
}
export default Timer;
