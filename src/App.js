import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';

import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';


const Box = styled.div`
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px pink;
    padding: 15px;
`;

const ProjectSection = styled.div`
  display: flex;
  height: 88vh;
  width: 55vw;
  flex-flow: wrap;
`;

const Intro = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

const greetings = ['Hola', 'Bonjour', 'Oh hai', 'Hello'];

const projects = [
  {id: 1, title: 'M.A.S.H.', content: ''},
  {id: 2, title: 'SLO', content: ''},
  {id: 3, title: 'FaceSpace', content: ''},
  {id: 4, title: 'this.website', content: ''}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      showProjectsDropdown: false,
      showExperienceDropdown: false


    };


    // array of refs to Projects
    // identitfy which one is hovered over
    // on hover set to true and set  others to false
    // true false
  }

  playGreetings() {
    greetings.map(g => console.log(g));
  }
  

  render() {
    return (
      <div className="App">
        <Intro>
          <div style={{ display: 'flex', marginBottom: '14vh' }}>
            <div style={{ marginLeft: '10vw' }}>
              <div style={{ display: 'flex', fontSize: '25px' }}><p>
                <span style={{fontWeight: 800, fontSize: '45px'}}>Hello</span>
                , my name is</p></div>
              <h1 style={{ fontSize: '10em', color: 'rgb(52, 52, 53)', textDecoration: 'underline', textDecorationColor: 'mediumaquamarine', margin: 0 }}>
                CHERITH <br /> SIMM<span><img style={{ borderRadius: '50%', width: '10vw', border: '3px solid #ffc9cd', verticalAlign: 'sub' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} /></span>NS
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexFlow: 'column-reverse', marginLeft: '2vw', fontSize: '25px' }}><p>and I'm a 
              <span style={{  color: 'rgb(52, 52, 53)', fontWeight: 800, textDecoration: 'underline', textDecorationColor: 'rgb(255, 201, 205)'}}>
              <Box style={{ display:'inline', marginLeft: '1vw', fontSize: '25px' }}>front end developer</Box>              
              </span></p>
            </div>
          </div>
        </Intro>

        <div style={{ display: 'flex', height: '95vh' }}>
          <Profile />

          <ProjectSection>

            <Projects projects={projects} />

            {/* <Projects name="M.A.S.H." />
            <Projects name="SLO" />
            <Projects name="FaceSpace" />
            <Projects name="this.website" /> */}
          </ProjectSection>

          <Experience />
        </div> 
      </div>
    );
  }
}

export default App;
