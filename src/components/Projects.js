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


    nextProject(){
        console.log('nextProject!');

        console.log(this.state.projectIndex);

        // this.setState({
        //     projectIndex: 1
        // });
    }

    trackHoverIn(project) {
        var index = this.props.projects.indexOf(project);

        projects[index].backgroundColor = 'rgb(254, 239, 240)';

        projects.forEach(p => {
            if (p.id != project.id) {
                p.backgroundColor = 'white';
            }
        });
        this.setState({
            project: projects
        });
    }

    trackHoverOut() {
        projects.forEach(p => {
            p.backgroundColor = 'rgb(254, 239, 240)';
        });

        this.setState({
            project: projects
        });
    }

    render() {
        console.log('projects: ' + projects);
        console.log('projects.length: ' + projects.length);

        return (
            <div style={{ display: 'flex', flexFlow: 'wrap', flexDirection: 'column' }}>
               
                <div style={{ display: 'flex'}}>
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
                    </div>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '20vw' }}>
                    <button>Previous</button>
                    <button>Next</button>
                </div>              */}
            </div>
        );
    }
}



export default Projects;


                    // this.state.projects.map((project) =>
                    //     <div style={{ display: 'flex', flexFlow: 'wrap', width: '50%' }}>
                    //         <Row>
                    //             <Card                                    
                    //                 style={{backgroundColor: project.backgroundColor}}>
                    //                 <div className="outline ">
                    //                     <h1
                    //                      onMouseEnter={this.trackHoverIn.bind(this, project)} 
                    //                      onMouseOut={this.trackHoverOut.bind(this)} 
                    //                     key={project.id}>
                    //                         {project.title}
                    //                     </h1>
                    //                 </div>
                    //             </Card>
                    //         </Row>
                    //     </div>