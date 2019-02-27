import React, { Component } from 'react';
import styled from 'styled-components';


const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: space-evenly;
`;

const Card = styled.div`
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

var projects = [];
var backgroundColor = '';

var projectIndex = 1;
var selected = projects[0];
var projects = [];

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: backgroundColor,
            projects: projects,
            projectIndex: 0,
            selectedProject: projects[0]
        }

        this.props.projects.map((project) => {
            projects.push(project);
        });

        this.nextProject = this.nextProject
    }


    prevProject = () => {
        this.setState({
            projectIndex: this.state.projectIndex - 1
        });
    }

    nextProject = () => {
        this.setState({
            projectIndex: this.state.projectIndex + 1
        });
    }


    render() {
        console.log('projects: ' + projects);
        console.log('projects.length: ' + projects.length);

        return (
            <div style={{ display: 'flex', flexFlow: 'wrap', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ position: 'absolute' }}>

                    <div style={{ display: 'flex' }}>
                            <h1 style={{ fontSize: '10em', margin: 0 }} >{this.props.projects[this.state.projectIndex].title}</h1>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >Project Description: </h1>
                                <p>{this.props.projects[this.state.projectIndex].description}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >My Role: </h1>
                                <p>{this.props.projects[this.state.projectIndex].role}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                            <button onClick={ this.prevProject } style={{ margin: '10px' }}>Previous</button>
                            <button onClick={ this.nextProject }  style={{ margin: '10px' }}>Next</button>
                        </div>


                        {/* {

                            this.state.projects.map((project, key) =>
                                <div>
                                    <div style={{ display: 'flex' }}>
                                        <h1 style={{ fontSize: '10em', margin: 0 }} key={ project.id }>{ project.title }</h1>
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >Project Description: </h1>
                                            <p key={ project.id } >{ project.description }</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >My Role: </h1>
                                            <p key={ project.id } >{ project.role }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        } */}


                    
                    </div>
                </div>
            </div>
        );
    }
}



export default Projects;

