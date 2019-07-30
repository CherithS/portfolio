import React, { Component } from 'react';
import styled from 'styled-components';
// import Box from '../App'


// const Box = styled.div`
//     font-size: 12px;
//     text-align: left;
//     background-color: white;
//     border: 1px solid pink;
//     box-shadow: 15px 5px #FFE600;
//     padding: 15px;
// `;

const ExperienceContainer = styled.div`
    height: 88vh;
    width: 20vw;
    position: relative;
    border: none;
    /* margin-right: 3%; */
    `;

const Outline = styled.div`
    height: 85vh;
    width: inherit;
    margin: 5;
    margin-left: 15;
    flex-direction: column;
    padding: 10px 15px;
    box-shadow: 15px 10px #FFE600;
    background-color: transparent;
`;


const skills = ['React', 'React Native', 'Redux', 'Node.js', 'ES6', 'Angular 4+', 'HTML5', 'CSS3', 'SASS', 'Flexbox', 'GIT',
    'Agile', 'JIRA', 'NPM', 'Unit Testing', 'AJAX', 'Restful APIs', 'Webpack', 'SPA', 'JSON', 'Responsive Design',
    'Gulp', 'Grunt', 'OOP', 'C#', '.Net Core', 'Rapid Prototyping', 'a11y', 'Wireframing', 'Interactive Design',
    'Cross Device Development', 'Photoshop', 'Illustrator', 'Adobe XD', 'Sketch', 'After Effects', 'UX Design'];


function Skills(props) {
    let isUsed = false;
    let projectSkills = props.projectSkills;

    return (
        skills.map((s, idx) => {

            if (projectSkills.includes(s)) { isUsed = true }
            else { isUsed = false }

            return (
                <div key={idx}>
                    <li key={idx} style={{ marginTop: 4, padding: 3, border: isUsed ? 'solid 3px blue' : 'none' }} >{s}</li>
                </div>
            )
        })
    )
}




class Experience extends Component {

    render() {
        return (
            <div>
                <ExperienceContainer className="card">
                    <Outline className="card">
                        <div><h2 style={{ fontWeight: 800 }}>Industries</h2></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'auto%' }}>
                            <div className="industries">
                                <h2>Advertising</h2>
                            </div>
                            <div className="industries">
                                <h2>Finances + Banking</h2>
                            </div>
                        </div>
                        <div><h2 style={{ fontWeight: 800 }}>Technologies</h2></div>

                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '100%', }}>
                            <ul style={{ listStyleType: 'none', fontSize: '65%', columns: 2, marginTop: 0, padding: 0 }}>
                                <Skills skills={skills} projectSkills={this.props.project.technologies} />
                            </ul >
                        </div>
                    </Outline>
                </ExperienceContainer>
            </div>

        );
    }
}

export default Experience;