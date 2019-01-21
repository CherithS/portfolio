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


class Experience extends Component {
    render() {
        return (
            <div>
                 {/* backgroundColor: '#FEEFF0', */}
                <div className="card" style={{ height: "88vh", width: '25vw', position: 'relative', border: 'none', marginRight: '3%', }}>
                    <div className='card' style={{ height: '85vh', width: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', padding: '10px 15px',boxShadow: '10px 5px mediumaquamarine', backgroundColor: 'transparent' }}>

                        <div><h2 style={{fontWeight:800}}>Industries</h2></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'auto%' }}>
                            <div className="skills">
                                <h2>Advertising</h2>
                            </div>
                            <div className="skills">
                                <h2>Finances + Banking</h2>
                            </div>
                        </div>

                        <div><h2 style={{fontWeight:800}}>Technologies</h2></div>


                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '70%', }}>
                            <Box>
                                <h1 style={{fontSize: '14px', fontWeight: 500, color: 'rgb(52, 52, 53)'}}>
                                React, React Native, Redux, Node.js, ES6, Angular 4+, HTML5, CSS3, SASS, Flexbox, GIT,
                                Agile, JIRA, NPM, Unit Testing, AJAX, Restful APIs, Webpack, SPA, JSON, Responsive Design, 
                                Gulp, Grunt, OOP, C#, .Net Core, Rapid Prototyping, a11y, Wireframing, Interactive Design,
                                Cross  Device Development, Photoshop, Illustrator, Adobe XD, Sketch, After Effects, UX Design, UI Design
                                </h1>
                                {/* <div className="skills">
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
                                </div> */}
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;