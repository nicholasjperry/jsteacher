import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextEditor from './TextEditorComponent';
import { Tasks } from '../shared/Problems';
// import {Redirect } from 'react-router-dom';

class Problems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTask: 0,
            tasks: Tasks

        };
    }

    showProblems() {
        document.querySelector('.problems-Landing').style.display = "none";
        document.querySelector('.problemsChoice').style.display = "inline-block";

    }

    specificTask(x) {
        document.querySelector('.problemsChoice').style.display = "none";
        document.querySelector('.playground').style.display = "inline-block";
        this.setState({
            currentTask: x
        });
    }
    

    quitBtn() {
        document.querySelector('.problems-Landing').style.display = "inline-block";
        document.querySelector('.playground').style.display = "none";
    }
    
    doneBtn() {
        alert('Clicking on this Button will check the code');
    }
    render() {
        const EachProblem = this.state.tasks.map(task => {
            return (
                <tr>
                    <td  className= "problemTitle" onClick={() => this.specificTask(task.id)}>
                        {task.name}
                    </td>

                    <td>
                        {task.difficulty}
                    </td>

                    <td>
                        <img width={100} src = {task.completed} alt ="false" />
                    </td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <Container className="full-page">
                    <Row>
                        <Col className="problems-Landing">
                            <h2 className="page-Heading">
                                Learn about the javascript fundamentals via the problems below
                            </h2>

                            <Button onClick={this.showProblems}>Try the App</Button>
                        </Col>


                        <Col xs={12} sm={12} className="problemsChoice">
                            <table >
                                <tr>
                                    <th>Title</th>
                                    <th>Difficulty</th>
                                    <th>Completed</th>
                                </tr>
                                {EachProblem}
                            </table>
                        </Col>


                        <Col xs={12} sm={12} className="playground">
                            <Col><strong>Objective</strong>:{this.state.tasks[this.state.currentTask].directions}</Col>
                            <Col><TextEditor /></Col>
                            <Col><Button onClick={this.quitBtn}>Quit</Button><Button onClick={this.doneBtn}>Done</Button></Col>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Problems;