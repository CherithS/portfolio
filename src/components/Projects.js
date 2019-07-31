import React, { Component } from 'react';
// import styled from 'styled-components';


// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: fit-content;
//     justify-content: space-evenly;
// `;

// const Card = styled.div`
//     display: flex;
//     flex-direction: row;
//     height: 90%;
//     width: 25vw;
//     border: none;
//     transition: .3s ease-in-out;

//     .outline {
//         display:flex;
//         width: inherit;
//         height: 40vh;
//         margin: 15px 5px 5px 15px;
//         flex-direction: column;
//         position: absolute;
//         background-color: transparent;
//         justify-content: center;
//         align-items: center;
//         display: flex;
//         border: solid 2px #ffc9cd;
//     }

//     h1:hover {      
//         margin: 0px;
//         cursor: pointer;
//         transition: .3s ease-in-out;
//     }
// `;

var projects = [];
var backgroundColor = '';

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

        // this.nextProject = this.nextProject

    }

    render() {

        return (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '50%   ', justifyContent: 'space-evenly' }}>

                <div style={{ display: 'flex' }}>
                    <h1 style={{ fontSize: '10em', margin: 0 }} >{this.props.projects[this.props.projectIndex].title}</h1>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >Project Description: </h1>
                        <p>{this.props.projects[this.props.projectIndex].description}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{ width: 'fit-content', fontSize: '1.5em', color: 'black', borderBottom: '10px solid #FFE600', paddingBottom: '10px' }} >My Role: </h1>
                        <p>{this.props.projects[this.props.projectIndex].role}</p>
                    </div>
                </div>
                {/* style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }} */}
                <div >
                    <button className="project-nav-button" type="button" onClick={this.prevProject}> Prev</button>
                    <button className="project-nav-button" type="button" onClick={this.nextProject}> Next</button>
                </div>
                {/* { !this.props.projects[this.props.projectIndex].comingSoon &&
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                        <button className='styled-button' ><h1 style={{ margin: 0, fontSize: 15 }} >Project</h1></button>
                        <button className='styled-button' ><h1 style={{ margin: 0, fontSize: 15 }} >Process</h1></button>
                    </div>
                }
                { this.props.projects[this.props.projectIndex].comingSoon &&
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                        <p style={{fontWeight: 800}}>(Coming Soon)</p>
                    </div>
                } */}
            </div>
        );
    }
}




export default Projects;

