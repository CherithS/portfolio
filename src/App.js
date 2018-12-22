import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';








class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card" style={{ width: "20vw", height: "85vh", marginTop: '5vh', marginLeft: '5%', position: 'relative', backgroundColor: 'gold', marginRight: '3%' }}>
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
                However, I will copy / paste a quote that genuinely pops into my head about once a week.
              </p>
            </div>
            <div className='card' style={{ height: '5vh', backgroundColor: 'white', border: '5px solid mediumblue', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <h4 style={{ color: 'mediumblue' }} >MESSAGE</h4>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "60vw", height: "85vh", marginTop: '5vh', marginLeft: '5%', backgroundColor: 'gold' }}>
          <div className='card' style={{  width: 'inherit', height: '85vh', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position:'absolute' }}>
            <div style={{ height: '10vh', width: 'inherit', border: '1px solid mediumblue', }}></div>
            <div style={{ height: '85vh', width: '20vw', border: '1px solid mediumblue', }}>
              <div style={{ height: '15vh', width: '20vw', border: '1px solid mediumblue', }}></div>
              <div style={{ height: '15vh', width: '20vw', border: '1px solid mediumblue', }}></div>
              <div style={{ height: '15vh', width: '20vw', border: '1px solid mediumblue', }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
