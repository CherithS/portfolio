import React, { Component } from 'react';
import styled from 'styled-components';




const ProjectsContainer = styled.div`
      display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
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
    .project-button-container{
        display: flex;
        flex-direction: row;
        justify-content: center;

        .project-nav-button {
            background: none;
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

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: backgroundColor,
            projectIndex: 0,
            selectedProject: projects[0]
        }

    }

    prevProject = () => {
        console.log('prev');
        this.setState({
            projectIndex: this.state.projectIndex - 1
        })

        if (this.state.projectIndex === 0) { this.setState({ projectIndex: this.props.projects.length - 1 }); console.log('if'); }
        else {
            this.setState({
                projectIndex: this.state.projectIndex - 1
            })
        }
    }

    nextProject = () => {
        this.setState({ projectIndex: this.state.projectIndex + 1 })
        console.log('next');
        console.log(projects);
        console.log(this.state.projectIndex)
        if (this.state.projectIndex === this.props.projects.length - 1) { this.setState({ projectIndex: 0 }); console.log('if'); }
        else {
            this.setState({ projectIndex: this.state.projectIndex + 1 })
        }
    }

    render() {

        return (
            <ProjectsContainer>

                <h1>{this.props.projects[this.state.projectIndex].title}</h1>

                <div>
                    <div class="project-info">
                        <h1>Project Description: </h1>
                        <p>{this.props.projects[this.state.projectIndex].description}</p>
                    </div>
                    <div class="project-info">
                        <h1>My Role: </h1>
                        <p>{this.props.projects[this.state.projectIndex].role}</p>
                    </div>
                </div>
                <div class="project-button-container">
                    <button className="project-nav-button" type="button" onClick={this.prevProject}> Prev</button>
                    <button className="project-nav-button" type="button" onClick={this.nextProject}> Next</button>
                </div>
                {!this.props.projects[this.state.projectIndex].comingSoon &&
                    <div className="more-info-buttons">
                        <button className='styled-button' ><h1 style={{ margin: 0, fontSize: 15 }} >Project</h1></button>
                        <button className='styled-button' ><h1 style={{ margin: 0, fontSize: 15 }} >Process</h1></button>
                    </div>
                }
                {this.props.projects[this.state.projectIndex].comingSoon &&
                    <div class="coming-soon">
                        <p style={{ fontWeight: 800 }}>(Coming Soon)</p>
                    </div>
                }
            </ProjectsContainer>
        );
    }
}




export default Projects;

