import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'reactstrap';
import { Tasks } from '../shared/Problems';

class Problems extends Component {
    constructor(props) {
        super(props);
        this.quitBtn = this.quitBtn.bind(this);
        this.quitModal = this.quitModal.bind(this);
        this.rightModal = this.rightModal.bind(this);
        this.wrongModal = this.wrongModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.showUser = this.showUser.bind(this);

        this.state = {
            currentTask: 0,
            tasks: Tasks,
            quitModalOpen: false,
            rightModalOpen: false,
            wrongModalOpen: false,
            username: ''

        };
    }

    showProblems() {
        document.querySelector('.problems-Landing').style.display="inline-block";
        document.querySelector('.playground').style.display="none";
        document.querySelector('.problems-Landing').style.display= "none";
        document.querySelector('.problemsChoice').style.display="inline-block";
    }

    specificTask(x) {
        document.querySelector('.problemsChoice').style.display="none";
        document.querySelector('.playground').style.display="inline-block";
        this.setState({
            currentTask: x,
            username:Tasks[x].place
        });
    }


    quitBtn() {
        document.querySelector('.problemsChoice').style.display = "inline-block";
        document.querySelector('.playground').style.display = "none";
        this.setState({
            quitModalOpen: false
        })
    }
    quitModal() {
        this.setState({
            quitModalOpen: true
        })
    }
    
    rightModal() {
        document.querySelector('.problemsChoice').style.display = "inline-block";
        document.querySelector('.playground').style.display = "none";
        this.setState({
            
            rightModalOpen: !this.state.rightModalOpen
        })
    }
    wrongModal(){
        this.setState({
            
            wrongModalOpen: !this.state.wrongModalOpen
        })
    }
    toggle() {
        this.setState({
            quitModalOpen: !this.state.quitModalOpen
        })
    }

    doneBtn() {
        alert('Clicking on this button will check the code.');
    }


    //Handle the TextArea for the Code
    handleChange = event => {
        this.setState({ username: event.target.value });
    };
    showUser() {
        if (this.state.username.replace(/\s/g, "") === this.state.tasks[this.state.currentTask].solution) {
            document.querySelector('.complete-box').innerHTML = this.state.tasks[this.state.currentTask].complete;
            this.rightModal();
        }
        else {
                this.wrongModal();
        }
    }
    
    render() {
        const eachProblem=this.state.tasks.map(task => {
            return (
                <tr>
                    <td className="problemTitle" onClick={() => this.specificTask(task.id)}>
                        {task.name}
                    </td>

                    <td>
                        {task.difficulty}
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
                                Try the App
                            </h2>
                            <p className="copy-text">
                            Learn about the javascript fundamentals via the problems below
                            </p>
                            <button className="app-button" onClick={this.showProblems}>Try the App</button>
                        </Col>
                        <Col xs={12} sm={12} className="problemsChoice">
                            <table >
                                <tr>
                                    <th>Title</th>
                                    <th>Difficulty</th>
                                </tr>
                                {eachProblem}
                            </table>
                        </Col>
                        <Col xs={12} sm={12} className="playground">
                            <Row>
                            <Col xs ={12} sm={12} md={6}><strong>{this.state.tasks[this.state.currentTask].name}</strong>:{this.state.tasks[this.state.currentTask].directions}</Col>
                            <Col xs ={12} sm={12} md={6}>
                                <textarea
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="codeBox"
                                />
                                <div className="complete-box"></div>
                            </Col>
                            </Row>
                            <Col><button className="app-button"onClick={this.quitModal}>Quit</button><button className="app-button"onClick={this.showUser}>Done</button></Col>
                        </Col>
                        <Modal className="quitModal" isOpen={this.state.quitModalOpen}>
                            <div className="Modal-box">
                                <p>
                            Are you sure you want to exit? All of your progress will be lost...<br></br>
                            <button className="modal-button" onClick={this.quitBtn}>QUIT</button> <button className="modal-button" onClick={this.toggle}>CANCEL</button>
                                </p>
                            </div>
                        </Modal>
                        <Modal className="rightModal" isOpen={this.state.rightModalOpen}>
                            <div className="Modal-box">
                                <p>
                            Wow, you're a Rockstar! You could do this for a living or something!<br></br>
                            <button className="modal-button" onClick={this.rightModal}>Okay</button> 
                                </p>
                            </div>
                        </Modal>
                        <Modal className="wrongModal" isOpen={this.state.wrongModalOpen}>
                            <div className="Modal-box">
                                <p>
                            Oops. Please make sure you followed the instructions carefully! Good luck<br></br>
                            <button className="modal-button" onClick={this.wrongModal}>Okay</button> 
                                </p>
                            </div>
                        </Modal>
                        
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Problems;