import React, { Component } from 'react';
import styled from 'styled-components';


const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: space-evenly;
`;

const Card = styled.div `
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 25vw;
    border: none;
    transition: .3s ease-in-out;

    .outline {
        display:flex;
        width: inherit;
        height: 40vh;
        margin: 15px 5px 5px 15px;
        flex-direction: column;
        position: absolute;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        display: flex;
        border: solid 2px #ffc9cd;
    }

    h1:hover {      
        margin: 0px;
        cursor: pointer;
        transition: .3s ease-in-out;
    }
`;

var projectStates = [];
var backgroundColor = '';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: backgroundColor,
            projects: projectStates
        }

        this.props.projects.map((project) => {
            projectStates.push(project);            
        });
    }

    trackHoverIn(project) {
        var index = this.props.projects.indexOf(project);

        projectStates[index].backgroundColor = 'rgb(254, 239, 240)';

        projectStates.forEach(p => {
             if(p.id != project.id){
                p.backgroundColor = 'white'; }
            });
        this.setState({
            project: projectStates
        });
    }

    trackHoverOut() {
        projectStates.forEach(p => { 
            p.backgroundColor = 'rgb(254, 239, 240)'; 
        });

        this.setState({
            project: projectStates
        });
    }
    
    render() {
        return (
            <div style={{display: 'flex', flexFlow: 'wrap'}}>                    
                {

                    this.state.projects.map((project) =>
                        <div style={{ display: 'flex', flexFlow: 'wrap', width: '50%' }}>
                            <Row>
                                <Card                                    
                                    style={{backgroundColor: project.backgroundColor}}>
                                    <div className="outline ">
                                        <h1
                                         onMouseEnter={this.trackHoverIn.bind(this, project)} 
                                         onMouseOut={this.trackHoverOut.bind(this)} 
                                        key={project.id}>
                                            {project.title}
                                        </h1>
                                    </div>
                                </Card>
                            </Row>
                        </div>
                    )}
            </div>
        );
    }
}



export default Projects;
