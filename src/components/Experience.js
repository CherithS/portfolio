import React, { Component } from 'react';
import styled from 'styled-components';
// import Box from '../App'


const Box = styled.div`
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px pink;
    padding: 15px;
`;

const ExperienceContainer = styled.div`
    height: 88vh;
    width: 25vw;
    position: relative;
    border: none;
    margin-right: 3%;
// `;

const Outline = styled.div`
    height: 85vh;
    width: inherit;
    margin: 5;
    margin-left: 15;
    flex-direction: column;
    padding: 10px 15px;
    box-shadow: 10px 15px mediumaquamarine;
    background-color: transparent;
`;

    
    var skills = [ 'React', 'React Native', 'Redux', 'Node.js', 'ES6', 'Angular 4+', 'HTML5', 'CSS3', 'SASS', 'Flexbox', 'GIT',
    'Agile', 'JIRA', 'NPM', 'Unit Testing', 'AJAX', 'Restful APIs', 'Webpack', 'SPA', 'JSON', 'Responsive Design', 
    'Gulp', 'Grunt', 'OOP', 'C#', '.Net Core', 'Rapid Prototyping', 'a11y', 'Wireframing', 'Interactive Design',
    'Cross Device Development', 'Photoshop', 'Illustrator', 'Adobe XD', 'Sketch', 'After Effects', 'UX Design', 'UI Design' ];

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>
                {/* backgroundColor: '#FEEFF0', */}
                <ExperienceContainer className="card">
                    <Outline className="card">
                        <div><h2 style={{ fontWeight: 800 }}>Industries</h2></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'auto%' }}>
                            <div className="skills">
                                <h2>Advertising</h2>
                            </div>
                            <div className="skills">
                                <h2>Finances + Banking</h2>
                            </div>
                        </div>
                        <div><h2 style={{ fontWeight: 800 }}>Technologies</h2></div>

                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '70%', }}>

                            {/* <h1 style={{fontSize: '14px', fontWeight: 400, color: 'rgb(52, 52, 53)'}}>
                                React, React Native, Redux, Node.js, ES6, Angular 4+, HTML5, CSS3, SASS, Flexbox, GIT,
                                Agile, JIRA, NPM, Unit Testing, AJAX, Restful APIs, Webpack, SPA, JSON, Responsive Design, 
                                Gulp, Grunt, OOP, C#, .Net Core, Rapid Prototyping, a11y, Wireframing, Interactive Design,
                                Cross  Device Development, Photoshop, Illustrator, Adobe XD, Sketch, After Effects, UX Design, UI Design
                                </h1> */}
                            <div className="skills">
                                <h2>React</h2>
                            </div>
                            <div className="card skills">
                                <h2>React Native</h2>
                            </div>
                            <div className="card skills">
                                <h2>Redux</h2>
                            </div>
                            <div className="card skills">
                                <h2>Node.js</h2>
                            </div>
                            <div className="card skills">
                                <h2>ES6</h2>
                            </div>
                            <div className="card skills">
                                <h2>Angular 4/6</h2>
                            </div>
                            <div className="card skills">
                                <h2>HTML5</h2>
                            </div>
                            <div className="card skills">
                                <h2>CSS3</h2>
                            </div>
                            <div className="card skills">
                                <h2>Sass</h2>
                            </div>
                            <div className="card skills">
                                <h2>Flexbox</h2>
                            </div>
                            <div className="card skills">
                                <h2>GIT</h2>
                            </div>
                            <div className="card skills">
                                <h2>Agile</h2>
                            </div>
                            <div className="card skills">
                                <h2>Jira</h2>
                            </div>
                            <div className="card skills">
                                <h2>NPM</h2>
                            </div>
                            <div className="card skills">
                                <h2>Unit Testing</h2>
                            </div>
                            <div className="card skills">
                                <h2>AJAX</h2>
                            </div>
                            <div className="card skills">
                                <h2> RESTful APIs</h2>
                            </div>
                            <div className="card skills">
                                <h2>Webpack</h2>
                            </div>
                            <div className="card skills">
                                <h2>SPA </h2>
                            </div>
                            <div className="card skills">
                                <h2>Responsive Design </h2>
                            </div>
                            <div className="card skills">
                                <h2>Cross-device Development </h2>
                            </div>
                            <div className="card skills">
                                <h2>JSON</h2>
                            </div>
                        </div>
                    </Outline>
                </ExperienceContainer>
            </div>

        );
    }
}

export default Experience;