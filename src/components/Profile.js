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
    box-shadow: -10px 15px pink;
    padding: 15px;
`;

const NameBox = styled.div`
    width: 12vw;
    line-height: 1;
    text-align: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6%;
    margin-left: -40px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: .5px solid mediumaquamarine;
    padding-left: 20px;
    background-color: white;
    padding-right: 20px;
`;

class Profile extends Component {
    render() {
        return (
            <div style={{ marginRight: '3vw' }}>
            {/* backgroundColor: '#FEEFF0', */}
                <div className="card" style={{ width: "12vw", height: "88vh",  marginLeft: '2vw', position: 'relative', border: 'none', marginRight: '3%', boxShadow: '-10px 15px mediumaquamarine' }}>
                    <div className='card' style={{ height: '85vh', width: '10vw', flexDirection: 'column', padding: '10px 15px', justifyContent:'space-evenly', backgroundColor: 'transparent' }}>
                        {/* <Box> */}
                            <img style={{ borderRadius: '50%', width: '10vw', border: '3px solid #ffc9cd' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />
                            <div style={{ width: '15vw' }}>`
                                <NameBox>
                                    <h1 style={{ fontSize: '1em', color: '#343435', textDecoration: 'underline', textDecorationColor: 'mediumaquamarine' }}>CHERITH SIMMONS</h1>
                                    <h2 style={{ fontSize: '.8em' }} >Front End Developer</h2>
                                </NameBox>
                            </div>
                        {/* </Box> */}
                        <div style={{ height: '40vh', width: 'inherit', margin: 5, display: 'inline', lineHeight: 1.5, textAlign: 'center' }}>
                            <Box>
                                <p style={{fontSize: '12px', textAlign: 'left'}}><span style={{fontWeight: 800}}>Likes:</span> Challenging convos, sushi, Netflix, learning, ethically-made clothing</p>
                            </Box>
                            <br/>
                            <Box>
                                <p style={{fontSize: '12px', textAlign: 'left'}}><span style={{fontWeight: 800}}>Dislikes:</span> Negativity, stereotyping, puppy mills, slow internet, employees-only restrooms, long lines</p>
                            </Box>
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