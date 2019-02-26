import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';

import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Background from './components/Background'



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

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const greetings = ['Hola', 'Bonjour', 'Oh hai', 'Hello'];

const projects = [
  { id: 1, 
    title: 'M.A.S.H.', 
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.', 
    role: 'Development + Design'
  },
  { 
    id: 2, 
    title: 'SLO', 
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.', 
    role: 'Development + Design'
  },
  { 
    id: 3, 
    title: 'FaceSpace', 
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.', 
    role: 'Development + Design'
  },
  { 
    id: 4, 
    title: 'this.website', 
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.', 
    role: 'Development + Design'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      showProjectsDropdown: false,
      showExperienceDropdown: false
    };

  }

  playGreetings() {
    greetings.map(g => console.log(g));
  }



  render() {
    return (
      <div className="App">
        <Intro>
          <div style={{ backgroundColor: 'transparent', height: '100vh',  justifyContent: 'center', position: 'relative' }}>
          <Background />
            
            <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', height: '100%', width: '100%' }}>
              <Container style={{ width: '40vw' }}>
                <div>
                  <div><h1 style={{ fontSize: '1.5em', borderBottom: '10px solid #FFE600', paddingBottom: '10px', width: 'fit-content' }}>Hello, my name is</h1></div>
                  <div>
                    <h1 style={{ fontSize: '5em', color: '#2E23C8', margin: 0 }}>
                      CHERITH <br /> SIMM<span>
                        <img style={{ borderRadius: '50%', width: '10vw', border: '9px solid white', verticalAlign: 'sub' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
                      </span>NS
                  </h1>
                  </div>
                </div>
              </Container>
              <Container style={{ width: '5vw' }}>
                <h1> + </h1>
              </Container>
              <Container style={{ width: '25vw' }}>
                <h1>I'm a 
                <span style={{ borderBottom: '30px solid #FFE600', paddingBottom: '-50px' }}> front end developer</span>
                </h1>
              </Container>
            </div>
          </div>

        </Intro>

        <div style={{ display: 'flex', height: '97vh', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Background style={{ paddingTop: 0 }} />
          <Profile />
          <ProjectSection>
            <Projects projects={projects} />
          </ProjectSection>
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
