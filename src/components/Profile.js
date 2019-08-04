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
    background-color: transparent;
    border: 1px solid pink;
    box-shadow: 10px 15px #f3f3f3;
    padding: 10px;
    margin-top: 20px;

`;

const Section = styled.div`
    position: relative;
    box-shadow: -10px 15px #2E23C8;
    height: 90%;
    border: solid 1px #0A3A38;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SectionOutline = styled.div`
    width: 12vw;
    flex-direction: columnn;
    padding: 10px 15px;
    justify-content: space-evenly;
    background-color: transparent;
   

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

    .bio-title {
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        p {
            font-size: .9em;
            text-align: center;
            color: #343435;
            padding: 0;
                margin: 0;

            &:first-child {
                font-weight: 800;
                font-size: 1em;
                padding: 0;
                margin: 0;
            }
        }
    }
`;

class Profile extends Component {
    render() {
        return (
            <Section>
                <SectionOutline>
                    <img alt="profile-photo" src={'https://m.momn.to/0i54Gs_1080x1080.gif'} />

                    <MiddleProfile>
                        <div className="bio-title">
                            <p>CHERITH SIMMONS</p>
                            <p>Front End Developer</p>
                        </div>
                        <Box>
                            <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Likes:</span> Challenging convos, sushi, Netflix, learning, ethically-made clothing</p>
                        </Box>

                        <Box>
                            <p style={{ fontSize: '1em', textAlign: 'left' }}><span style={{ fontWeight: 800 }}>Dislikes:</span> Negativity, stereotyping, puppy mills, slow internet, long lines</p>
                        </Box>
                        {/* style={{ display:'flex', width: 'inherit', height: '5vh', backgroundColor: 'white', border: '5px solid #FFE600', justifyContent: 'center', flexDirection: 'center', alignItems: 'center', cursor: 'pointer' }} */}
                        <div className="styled-button" >
                            <h4><a href="mailto:cherithsimmons@gmail.com" target="_top">MESSAGE</a></h4>
                        </div>
                    </MiddleProfile>

                </SectionOutline>
            </Section>
        );
    }
}

export default Profile;