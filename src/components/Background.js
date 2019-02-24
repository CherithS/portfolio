import React, { Component } from 'react';

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
      <div style={{display: 'flex', position: 'absolute',height: '100%', width:'100%', alignItems: 'center'}}>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    )
  }
   
  export default Background;