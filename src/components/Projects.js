import React, { Component } from 'react';
import styled from 'styled-components';




const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    /* width: 50%; */
    justify-content: space-evenly;

    h1 {
        font-size: 10vw;
        margin: 0;
    }

    .project-info {

        h1 {
            width:fit-content;
            font-size: 1.5em;
            color: black;
            border-bottom: 10px solid #FFE600;
            padding-bottom: 10px;
        }
    }


    .more-info-buttons {
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        width: 100%;
    }

    .coming-soon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
`;

var projects = [];
var backgroundColor = '';
var projectUrl;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: backgroundColor,
            projectIndex: 0,
            selectedProject: projects[0]
        }
        console.log(this.props.projects);
        console.log(this.state.projectIndex);
        this.projectUrl = this.props.projects[this.state.projectIndex].url;
        console.log('url: ' + this.projectUrl);
    }

    render() {

        return (
            <ProjectsContainer>

                <h1>{this.props.projects[this.props.projectIndex].title}</h1>

                <div>
                    <div className="project-info">
                        <h1>Project Description: </h1>
                        <p>{this.props.projects[this.props.projectIndex].description}</p>
                    </div>
                    <div className="project-info">
                        <h1>My Role: </h1>
                        <p>{this.props.projects[this.props.projectIndex].role}</p>
                    </div>
                </div>
                {!this.props.projects[this.props.projectIndex].comingSoon &&
                    <div className="more-info-buttons">                    
                        <button className='styled-button'><a href={{projectUrl}}>Project</a></button>
                        <button className='styled-button'>Process</button>
                    </div>
                }
                {this.props.projects[this.props.projectIndex].comingSoon &&
                    <div className="coming-soon">
                        <p style={{ fontWeight: 800 }}>(Coming Soon)</p>
                    </div>
                }
     
            
            </ProjectsContainer>
        );
    }
}




export default Projects;

