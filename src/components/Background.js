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
      <div>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    )
  }
   
  export default Background;