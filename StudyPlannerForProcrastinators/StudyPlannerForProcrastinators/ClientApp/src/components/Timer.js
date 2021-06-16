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
            iteration: 1,
            taskTitle: "",
            taskGoal: "",
        };
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            second: --this.state.second
        });
        if (this.state.second < 0) {
            this.setState({
                second: 59,
                minute: --this.state.minute
            });
            if (this.state.minute < 0) {
                this.endOfIteration();
            }
        }
    }

    startTimer() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    pauseTimer() {
        clearInterval(this.intervalID);
    }

    stopTimer() {
        clearInterval(this.intervalID);
        this.setState({
            second: 0,
            minute: 0
        });
    }

    resetTimer() {
        clearInterval(this.intervalID);
        this.setState({
            second: 0,
            minute: 25
        });
    }

    endOfIteration() {
        this.setState({
            second: 0,
            minute: 0
        });
        clearInterval(this.intervalID);
        this.props.updateIterationAndTime();
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
            </Row>
            
            <Row>
                <Col>
                    <Button color="primary" onClick={() => this.startTimer()}>Start Iteration</Button>
                    <Button title="Pause the timer when you want to take a piss." color="danger" onClick={() => this.pauseTimer()}>Pause</Button>
                    <Button title="Reset timer" color="secondary" onClick={() => this.resetTimer()}>Reset</Button>
                </Col>
                <Col>
                    <Button title="When you Chicken Out, current iteration stops forever. Time spent in this iteration doesn't get added to the TimeSpent column." color="warning" onClick={() => this.stopTimer()}>Chicken Out</Button>
                </Col>
                <Col>
                </Col>
            </Row>
        </Fragment>;
    }
}
export default Timer;
