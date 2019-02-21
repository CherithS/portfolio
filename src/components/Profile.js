import React, { Component } from 'react';
import styled from 'styled-components';

import instagram from '../../src/instagram.svg';
import linkedin from '../../src/linkedin.svg';
import github from '../../src/github.svg';



const Box = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px #f3f3f3;
    padding: 10px;
    /* max-height: 5vh; */
`;

const NameBox = styled.div`
    width: inherit;
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

const Section = styled.div`
    display: flex;
    width: 12vw;
    height: 88vh;
    margin-left: 2vw;
    position: relative;
    border: none;
    margin-right: 3%;
    box-shadow: -10px 15px #2E23C8;
`;

const SectionOutline = styled.div`
    height: 85vh;
    width: 9vw;
    flex-direction: columnn;
    padding: 10px 15px;
    justify-content: space-evenly;
    background-color: transparent;
    border: solid 1px #0A3A38;
`;

const MiddleProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 67vh;
    /* height: 10vh;
    width: inherit;
    display: inline; */
    /* line-height: 1.5;
    text-align: center; */
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Profile extends Component {
    render() {
        return (
            <div style={{ }}>
                <Section>
                    <SectionOutline>
                        <img alt="" style={{ borderRadius: '50%', width: 'inherit', border: '6px solid white' }} src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />

                        <MiddleProfile>
                            <Box style={{flexDirection: 'column', width: '7vw', lineHeight:'.3'}}>
                                <h1 style={{ fontSize: '1em', color: '#343435', fontWeight: 800, textDecorationColor: 'mediumaquamarine' }}>CHERITH SIMMONS</h1>
                                <h2 style={{ fontSize: '.8em' }} >Front End Developer</h2>
                            </Box>
                            <Box>
                                <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Likes:</span> Challenging convos, sushi, Netflix, learning, ethically-made clothing</p>
                            </Box>

                            <Box>
                                <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Dislikes:</span> Negativity, stereotypnpm starting, puppy mills, slow internet, employees-only restrooms, long lines</p>
                            </Box>
                            <div className='card' style={{ display:'flex', width: 'inherit', height: '5vh', backgroundColor: 'white', border: '5px solid #FFE600', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 style={{ color: 'mediumblue' }} >MESSAGE</h4>
                            </div>
                        </MiddleProfile>
                        {/* <BottomProfile>
                            <div className='card' style={{ display:'flex', width: '10vw', height: '5vh', backgroundColor: 'transparent', border: '5px solid #FFE600', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 style={{ color: 'mediumblue' }} >MESSAGE</h4>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '7vw', marginTop: '1vh' }}>
                                <img src={github} style={{ height: '3vh' }} />
                                <img src={linkedin} style={{ height: '3vh' }} />
                                <img src={instagram} style={{ height: '3vh' }} />
                            </div>
                        </BottomProfile> */}
                    </SectionOutline>
                </Section>
            </div>
        );
    }
}

export default Profile;