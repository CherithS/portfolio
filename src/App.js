import React, { Component } from 'react';
import styled from 'styled-components';
import './App.scss';

import Projects from './components/Projects';
import ExperienceDropdown from './components/Experience';

import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';


const ProjectSection = styled.div`
  display: flex;
  height: 88vh;
  width: 55vw;
  flex-flow: wrap;
`;





class App extends Component {
  constructor() {
    super();
    this.state = {
      showProjectsDropdown: false,
      showExperienceDropdown: false
    };
  }


  showProjects() {
    this.setState({
      showProjectsDropdown: !this.state.showProjectsDropdown
    })
  }

  showExperience() {
    this.setState({
      showExperienceDropdown: !this.state.showExperienceDropdown
    })
  }

  render() {
    return (
      <div className="App">

        {/* PROFILE */}
        <div className="card" style={{ width: "12vw", height: "88vh", marginTop: '5vh', marginLeft: '2vw', position: 'relative', border: 'none', backgroundColor: '#FEEFF0', marginRight: '3%' }}>
          <div className='card' style={{ height: '85vh', width: '10vw', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', padding: '10px 15px', backgroundColor: 'transparent' }}>
            <img style={{ borderRadius: '50%', width: '10vw', border: '3px solid #ffc9cd', marginLeft: '5%' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
            <div style={{ height: '40vh', width: 'inherit', margin: 5, display: 'inline', lineHeight: 1.5, textAlign: 'center' }}>
              <div style={{ lineHeight: 2 }}>
                <h1 style={{ fontSize: '1.5em', color: 'mediumblue', margin: 0 }}>CHERITH SIMMONS</h1>
              </div>
              <p style={{ fontSize: '.6em', color: 'mediumblue' }}>I am a FRONT END DEVELOPER.</p> <br />
              <p style={{ fontSize: '.7em', color: 'mediumblue', textAlign: 'left' }}>
                Don't worry.  I'm not here to tell you about how much I love coffee or my favorite breweries.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className='card' style={{ width: '10vw', height: '5vh', backgroundColor: 'transparent', border: '5px solid mediumblue', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <h4 style={{ color: 'mediumblue' }} >MESSAGE</h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '7vw', marginTop: '1vh' }}>
                <img src={github} style={{ height: '3vh' }} />
                <img src={linkedin} style={{ height: '3vh' }} />
                <img src={instagram} style={{ height: '3vh' }} />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <ProjectSection>
          <Projects name="M.A.S.H." />
          <Projects name="SLO" />
          <Projects name="FaceSpace" />
          <Projects name="this.website" />
        </ProjectSection>



        {/* SIDE DETAILS */}
        <div className="card" style={{ height: "88vh", width: '25vw', marginTop: '5vh', marginLeft: '2vw', position: 'relative', border: 'none', backgroundColor: '#FEEFF0', marginRight: '3%' }}>
          <div className='card' style={{ height: '85vh', width: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', padding: '10px 15px', backgroundColor: 'transparent' }}>
         
          <div><h2>Industries</h2></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'auto%' }}>
                <div className="skills">
                  <h2>Advertising</h2>
                </div>
                <div className="skills">
                  <h2>Finances + Banking</h2>
                </div>
            </div>

            <div><h2>Technologies</h2></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '70%' }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
