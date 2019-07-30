import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';

import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Background from './components/Background'
import { relative } from 'path';



// const Box = styled.div`
//     font-size: 12px;
//     text-align: left;
//     background-color: white;
//     border: 1px solid pink;
//     box-shadow: 10px 15px pink;
//     padding: 15px;
// `;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 88vh;
  width: 55vw;

  /* button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  } */
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
  { id: 0, 
    title: 'M.A.S.H.', 
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.', 
    role: 'Development + Design',
    technologies: ['Angular 4+', 'SASS', 'Flexbox', 'Responsive Design', 'NPM']
  },
  { 
    id: 1, 
    title: 'FaceSpace', 
    description: 'Who\'s in your top eight?', 
    role: 'Development + Design',
    technologies: ['']
  },
  { 
    id: 2, 
    title: 'this.website', 
    description: 'My personal portfolio showcasing my', 
    role: 'Development + Design',
    technologies: ['']
  }
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      projectIndex: 0
    };
  }

  playGreetings() {
    greetings.map(g => console.log(g));
  }

  
  prevProject = () => {
    console.log('prev');
    this.setState({
      projectIndex: this.state.projectIndex - 1
  })
  
      if (this.state.projectIndex === 0) { this.setState({ projectIndex: 0 }); console.log('if'); }
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
      if (this.state.projectIndex === projects.length - 1) { this.setState({ projectIndex: projects.length - 1 }); console.log('if'); }
      else {
          this.setState({ projectIndex: this.state.projectIndex + 1 })
      }
  }



  render() {
    return (
      <div className="App">
        <Intro>
          <div style={{ backgroundColor: 'transparent', height: '100vh',  justifyContent: 'center', position: 'relative' }}>
          <Background style={{ width: '100%' }} />
            
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

        <div style={{ display: 'flex', height: '90vh', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Background style={{ paddingTop: 0 }} />
          <Profile />
          <ProjectSection>
            <Projects projects={projects} projectIndex={ this.state.projectIndex } />
            <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
              <button style={{ position: relative, zIndex: 1 }} type="button" onClick={this.prevProject}> Prev</button>
              <button style={{ position: relative, zIndex: 1 }} type="button" onClick={this.nextProject}> Next</button>
            </div>
          </ProjectSection>
          <Experience project={ projects[this.state.projectIndex] } />
        </div>
      </div>
    );
  }
}

export default App;
