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
    height: 70%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: .5px solid black;
    padding: 35px;

    .project-button-container{
        display: flex;
        flex-direction: row;
        justify-content: center;

        .project-nav-button {
            background: none;
            position: relative;
            z-index: 1;
            border: 0;
            background-color: transparent;
            cursor: pointer;

            :hover {
              text-decoration:underline;
            }
        }
    }
`;

const Intro = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    .black-outline {
      width: 85%;
      height: 90%;
      border: 1px solid #c2bfbf;
      /* border: 3px solid #eeecff; */
      position: absolute;
      left: 5%;
      /* background-color: #eeecff; */

      /* width: 50%;
      height:50%;
      border: 1px solid black; */
     
    }

    .intro-content {
      display: flex;
      justify-content: center;
      position: absolute;
      height: 100%;
      width: 100%;
    }
`;

const MainPage = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;

    justify-content: space-evenly;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;

    .name-content {
      display:flex;
      flex-direction: column;
    }
`;

const prev = '< PREV';
const next = 'NEXT >';

const greetings = ['Hola', 'Bonjour', 'Oh hai', 'Hello'];

const projects = [
  {
    id: 0,
    title: 'U.S. Bank',
    description: 'Splash page advertising the new iOS app for U.S. Bank',
    role: 'Development',
    technologies: ['React', 'ES6', 'GIT', 'a11y', 'Rapid Prototyping', 'Sketch', 'Cross Device Development', 'Webpack', 'SPA', 'Responsive Design'],
    comingSoon: false,
    url: 'https://www.usbank.com/splash/digital-banking/new-mobile-app/index.html',
    process: false
  },
  {
    id: 1,
    title: 'this.website',
    description: 'My personal portfolio showcasing my',
    role: 'Development + Design',
    technologies: ['React', 'Adobe XD', 'After Effects', 'UX Design', 'Wireframing', 'NPM'],
    comingSoon: false,
    url: '',
    process: true
  },
  {
    id: 2,
    title: 'M.A.S.H.',
    description: 'A redesigned interactive front-end experience inspired by the childhood game M.A.S.H.',
    role: 'Development + Design',
    technologies: ['Angular 4+', 'SASS', 'Flexbox', 'Responsive Design', 'NPM'],
    comingSoon: true,
    url: '',
    process: false
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

    if (this.state.projectIndex === 0) { this.setState({ projectIndex: projects.length - 1 }); console.log('if'); }
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
    if (this.state.projectIndex === projects.length - 1) { this.setState({ projectIndex: 0 }); console.log('if'); }
    else {
      this.setState({ projectIndex: this.state.projectIndex + 1 })
    }
  }



  render() {
    return (
      <div className="App">
        <Intro>
        <div className="black-outline"></div>
          <Background style={{ width: '100%' }} />
         
          <div className="intro-content">
            <Container >
              <div className="name-content">
                <div> <h1 >Hello, my name is</h1></div>
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

        </Intro>

        <MainPage>
          <Background style={{ paddingTop: 0 }} />
          <Profile />
          <ProjectSection>
            <Projects projects={projects} projectIndex={this.state.projectIndex} />
            <div className="project-button-container">
              <button className="project-nav-button" type="button" onClick={this.prevProject}> {prev}</button>
              <button className="project-nav-button" type="button" onClick={this.nextProject}> {next} </button>
            </div>
          </ProjectSection>
          <Experience project={projects[this.state.projectIndex]} />
        </MainPage>
      </div>
    );
  }
}

export default App;
