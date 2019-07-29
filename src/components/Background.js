import React from 'react';

import background  from '../assets/animation-data/one.json';
import ReactBodymovin from 'react-bodymovin';



const Background = () => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: background
    }
   
    return (
      <div style={{display: 'flex', position: 'absolute', height: '90%', paddingTop:'10px', width:'100%', marginTop:'4vh', alignItems: 'center', overflow:'hidden'}}>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    )
  }
   
  export default Background;

//   display: flex;
//   position: absolute;
//   height: 90%;
//   padding-top: 10px;
//   width: 100%;
//   align-items: center;
//   overflow: hidden;
//   margin-top: 2vh;