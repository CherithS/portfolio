import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

import ProjectsDropdown from './components/Projects';
import ExperienceDropdown from './components/Experience';

import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';








class App extends Component {
  constructor(props) {
    super(props);
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
        <div className="card" style={{ width: "20vw", height: "85vh", marginTop: '5vh', marginLeft: '5%', position: 'relative', backgroundColor: 'white', marginRight: '3%' }}>
          <div className='card' style={{ height: '85vh', width: '18vw', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', padding: '10px 15px' }}>
            <h1 style={{ fontSize: '2em', margin: 0, marginBottom: 15, marginTop: 15, fontWeight: 600 }} >Profile</h1>
            <img style={{ width: '15vw', border: '5px solid #353434', marginLeft: '5%' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
            <div style={{ height: '40vh', width: 'inherit', margin: 5, display: 'inline', lineHeight: 1.5, textAlign: 'center' }}>
              <div style={{ lineHeight: 2 }}>
                <h1 style={{ fontSize: '1.5em', color: 'orangered', margin: 0 }}>CHERITH SIMMONS</h1>
                <div>
                  <img src={github} style={{ height: '3vh' }} />
                  <img src={linkedin} style={{ height: '3vh' }} />
                  <img src={instagram} style={{ height: '3vh' }} />
                </div>
              </div>
              <p style={{ fontSize: '.6em', color: 'mediumblue' }}>I am a FRONT END DEVELOPER.</p> <br />
              <p style={{ fontSize: '1em', color: 'mediumblue' }}>
                Don't worry.  I'm not here to tell you about how much I love coffee or my favorite breweries.
              </p>
            </div>
            <div className='card' style={{ height: '5vh', backgroundColor: 'white', border: '5px solid mediumblue', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <h4 style={{ color: 'mediumblue' }} >MESSAGE</h4>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="card" style={{ width: "60vw", height: "85vh", marginTop: '5vh', marginLeft: '1%', backgroundColor: 'white' }}>
          <div className='card' style={{  width: 'inherit', height: '85vh', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position:'absolute' }}>
           {/* NAVIGATION */}
            <div style={{ height: '5vh', width: 'inherit', border: '1px solid mediumblue', display:'flex', flexDirection: 'row', backgroundColor:'mediumblue' }}>
              <div style={{display:'flex', height:'5vh', width: '15vw',  border: '1px solid white', }}>
                <h1 onClick={this.showProjects.bind(this)} style={{ display: 'flex', margin:0, fontSize: '1.5em', color: 'white', cursor: 'pointer', paddingLeft: '15px' }}>PROJECTS</h1>
              </div>
              <div style={{display:'flex', height:'5vh', width: '15vw',  border: '1px solid white', }}>
                <h1 onClick={this.showExperience.bind(this)} style={{ display: 'flex', margin:0, fontSize: '1.5em', color: 'white', cursor: 'pointer', paddingLeft: '15px' }}>EXPERIENCE</h1>
              </div>
              <div style={{display:'flex', height:'5vh', width: '15vw',  border: '1px solid white', }}>
                <h1 style={{ display: 'flex', margin:0, fontSize: '1.5em', color: 'white', cursor: 'pointer', paddingLeft: '15px' }}>Skills</h1>
              </div>
            </div>

             <div style={{ height: '5vh', width: 'inherit', border: '1px solid mediumblue', display:'flex', flexDirection: 'row', backgroundColor:'white' }}>
                <ProjectsDropdown />
            </div>



            {/* <div style={{ display: 'flex', flexDirection: 'row' }} >
              { this.state.showProjectsDropdown && <ProjectsDropdown /> }
              { this.state.showExperienceDropdown && <ExperienceDropdown /> }
            </div> */}

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width:'inherit' }}>
              <div className="card skills">
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
