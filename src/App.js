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
        <div className="card" style={{width: "20vw", height: "85vh", marginTop: '5vh', marginLeft: '5%',position: 'relative', backgroundColor: 'gold', marginRight: '3%'}}>
          {/* <div className="card" style={{height:'80vh', width:'20vw', flexDirection:'column', background: 'transparent' }}> */}
            <div className='card' style={{ height:'85vh', width:'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection:'column', paddingLeft: 10 }}>
              <h1 style={{fontSize: '2em', margin: 0, marginBottom: 15}} >Profile</h1>
              <img style={{width:'15vw', border: '5px solid #353434'}} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
              <div style={{ height:'40vh', width:'inherit', margin: 5, display: 'inline', lineHeight: 1.5 }}>
                <h1 style={{ fontSize: '2em', color: 'orangered', margin: 0 }}>Cherith Simmons</h1>
                <p style={{ fontSize: '.6em', color: 'mediumblue' }}>FRONT END DEVELOPER</p>
                <div>
                  <img src={github} style={{ height: '3vh'}} />
                  <img src={linkedin} style={{ height: '3vh'}} />
                  <img src={instagram} style={{ height: '3vh'}} />
                </div>
              </div>  
            {/* </div> */}
            {/* <div className='card' style={{ height:'20vh', width:'inherit', margin: 5, display: 'inline', lineHeight: 1.5 }}>
              <h1 style={{ fontSize: '2em', color: 'orangered', margin: 0 }}>Cherith Simmons</h1>
              <p style={{ fontSize: '.6em', color: 'mediumblue' }}>FRONT END DEVELOPER</p>
              <div>
                <img src={github} style={{ height: '3vh'}} />
                <img src={linkedin} style={{ height: '3vh'}} />
                <img src={instagram} style={{ height: '3vh'}} />
              </div>
            </div> */}
            {/* <div className='card' style={{ height:'35vh', width:'inherit',marginTop: '40vh', position:'absolute' }}></div> */}
          </div>          
        </div>


        <div className="card" style={{width:"65vw", height: "85vh", marginTop: '5vh', position: 'relative'}} >
          <div className='card' style={{height:'5vh', width:'inherit', position:'absolute'}}>
            <div style={{marginLeft: '1vw', marginTop: '.3vh'}}>
              <div className='bar'/>
              <div className='bar'/>
              <div className='bar'/>
            </div>
          </div>
        </div>               
      </div>
    );
  }
}

export default App;


  {/* <div className="menu" style={{ paddingLeft: 30, display: 'none' }}>
          <h1 style={{ fontSize: 100, color: 'rgb(253, 221, 44)' }}>PROJECTS</h1>
          <div style={{ fontSize: 15 }}>
            <h2 style={{ fontWeight: 100 }}>☺ MASH-app</h2>
            <h2 style={{ fontWeight: 100 }}>☺ react-native-prototype</h2>
            <h2 style={{ fontWeight: 100 }}>☺ react-header-component</h2>
          </div>
        </div> */}
        {/* </div> */}