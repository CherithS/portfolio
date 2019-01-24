import React, { Component } from 'react';
import styled from 'styled-components';


const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    /* margin-top: 5vh; */
    justify-content: space-evenly;
`;

const Card = styled.div `
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 25vw;
    background: rgb(254, 239, 240);
    border: none;

    :hover{
        height: 95%;
        background: transparent;
        transition: .6s ease-in-out;
    }

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

    .outline:hover {      
        margin: 0px;
        cursor: pointer;
        transition: .3s ease-in-out;
    }
`;



class Projects extends Component {
    constructor(props){
        super(props);
        console.log('props: ' + props);
    }
    
    render() {
        return (
            <div style={{display: 'flex', flexFlow: 'wrap'}}>                    
                {

                    this.props.projects.map((project) =>
                        <div style={{ display: 'flex', flexFlow: 'wrap', width: '50%' }}>
                            <Row>
                                <Card>
                                    <div className="outline ">
                                        <h1 key={project.id}>
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
