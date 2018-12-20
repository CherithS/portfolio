import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card" style={{width: "20vw", height: "85vh", marginTop: '8vh', marginLeft: '5%',position: 'relative', background: 'transparent', marginRight: '3%'}}>
          <div className="card" style={{height:'40vh', width:'20vw', flexDirection:'column', background: 'transparent' }}>
            <div className='card' style={{ height:'30vh', width:'inherit', margin: 5 }}></div>
            <div className='card' style={{ height:'10vh', width:'inherit', margin: 5 }}></div>
            <div className='card' style={{ height:'45vh', width:'inherit',marginTop: '40vh', position:'absolute' }}></div>
          </div>          
        </div>


        <div className="card" style={{width:"65vw", height: "85vh", marginTop: '8vh', position: 'relative', background: 'transparent'}} >
          <div className='card' style={{height:'5vh', width:'inherit', position:'absolute'}}></div>
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