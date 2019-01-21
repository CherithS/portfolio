import React, { Component } from 'react';
import styled from 'styled-components';

import instagram from '../../src/instagram.svg';
import linkedin from '../../src/linkedin.svg';
import github from '../../src/github.svg';



const Box = styled.div`
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px pink;
    padding: 15px;
`;



class Profile extends Component {
    render() {
        return (
            <div style={{ marginRight: '3vw' }}>
                <div className="card" style={{ width: "12vw", height: "88vh", marginTop: '5vh', marginLeft: '2vw', position: 'relative', border: 'none', backgroundColor: '#FEEFF0', marginRight: '3%' }}>
                    <div className='card' style={{ height: '85vh', width: '10vw', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', padding: '10px 15px', justifyContent:'space-evenly', backgroundColor: 'transparent' }}>
                        <div>
                            <img style={{ borderRadius: '50%', width: '10vw', border: '3px solid #ffc9cd', marginLeft: '5%' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
                            <div style={{ width: '15vw' }}>`
                                <h1 style={{ fontSize: '1.5em', color: '#343435', margin: 0, textDecoration: 'underline', textDecorationColor: 'mediumaquamarine', marginBottom: '10px' }}>CHERITH SIMMONS</h1>
                            </div>
                        </div>
                        <div style={{ height: '40vh', width: 'inherit', margin: 5, display: 'inline', lineHeight: 1.5, textAlign: 'center' }}>
                            <div >
                                <p style={{fontSize: '12px', textAlign: 'left'}}><span style={{fontWeight: 800}}>Likes:</span> Challenging convos, sushi, Netflix, learning, ethically-made clothing</p>
                            </div>
                            <br/>
                            <div>
                                <p style={{fontSize: '12px', textAlign: 'left'}}><span style={{fontWeight: 800}}>Dislikes:</span> Negativity, stereotyping, puppy mills, slow internet, employees-only restrooms, long lines</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className='card' style={{ width: '10vw', height: '5vh', backgroundColor: 'transparent', border: '5px solid medium', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
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
            </div>
        );
    }
}

export default Profile;