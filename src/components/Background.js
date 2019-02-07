import React, { Component } from 'react';
import styled from 'styled-components';
import middle from '../assets/backgrounds/SVG/pink3.svg';
import bottomRight from '../assets/backgrounds/SVG/pink4.svg';
import middleRight from '../assets/backgrounds/SVG/pink5.svg';
import topRight from '../assets/backgrounds/SVG/pink6.svg';
import bottomLeft from '../assets/backgrounds/SVG/pink7.svg';
import topLeft from '../assets/backgrounds/SVG/pink8.svg';


const Vectors = styled.img`
    width: 100%;
`;

class Background extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ display:'flex', flexDirection: 'row', flexFlow:'wrap', width: '97vw', justifyContent: 'space-between', position: 'absolute' }}>
                <div style={{ display:'flex', flexDirection:'column', width: '33%', height: '100%', justifyContent:'space-between'  }}>                   
                    <img className="floating-vector" src={topLeft} style={{ width:'50%' }}/>
                    <img className="floating-vector" src={bottomLeft} style={{ }}/>                         
                </div>
                <div style={{ display:'flex', width: '33%' }}>
                    <img className="floating-vector" src={middle}/>
                </div>
                <div style={{display: 'flex', flexDirection:'column', width: '33%', height: '100%'}}>                      
                    <img className="floating-vector" src={topRight} style={{ width: '50%' }}/>
                    <img className="floating-vector" src={middleRight}/>                   
                    <img className="floating-vector" src={bottomRight}/> 
                </div>
            </div>
        );
    }
}

export default Background;