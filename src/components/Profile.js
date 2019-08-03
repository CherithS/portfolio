import React, { Component } from 'react';
import styled from 'styled-components';

// import instagram from '../../src/instagram.svg';
// import linkedin from '../../src/linkedin.svg';
// import github from '../../src/github.svg';



const Box = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px #f3f3f3;
    padding: 10px;

    
`;

const Section = styled.div`
    position: relative;
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

    img {
        border-radius: 50%;
        width: inherit;
        border: 6px solid white;

    }
`;

const MiddleProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 67vh;

    .bio-title {

    display: flex;
    align-items: center;
    font-size: 12px;
    text-align: left;
    background-color: white;
    border: 1px solid pink;
    box-shadow: 10px 15px #f3f3f3;
    padding: 10px;


        display: flex;
        flex-direction: column;
        width: 7vw;
        line-height: .3;
    }
`;

class Profile extends Component {
    render() {
        return (
            <div style={{ }}>
                <Section>
                    <SectionOutline>
                        <img alt="profile-photo" src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />

                        <MiddleProfile>
                            <div class=".bio-title">
                                <h1 style={{ fontSize: '1em', color: '#343435', fontWeight: 800, textDecorationColor: 'mediumaquamarine' }}>CHERITH SIMMONS</h1>
                                <h2 style={{ fontSize: '.8em' }} >Front End Developer</h2>
                            </div>
                            <Box>
                                <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Likes:</span> Challenging convos, sushi, Netflix, learning, ethically-made clothing</p>
                            </Box>

                            <Box>
                                <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Dislikes:</span> Negativity, stereotypnpm starting, puppy mills, slow internet, employees-only restrooms, long lines</p>
                            </Box>
                            {/* style={{ display:'flex', width: 'inherit', height: '5vh', backgroundColor: 'white', border: '5px solid #FFE600', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }} */}
                            <div className="styled-button" >
                               <h4><a href="mailto:cherithsimmons@gmail.com" target="_top">MESSAGE</a></h4>
                            </div>
                        </MiddleProfile>

                    </SectionOutline>
                </Section>
            </div>
        );
    }
}

export default Profile;