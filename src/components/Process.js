import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from '../assets/process-imgs/portfolio-1.JPG';
import image2 from '../assets/process-imgs/portfolio-2.JPG';
import image3 from '../assets/process-imgs/portfolio-3.jpg';
import image4 from '../assets/process-imgs/portfolio-4.JPG';
import image5 from '../assets/process-imgs/portfolio-5.png';
import image6 from '../assets/process-imgs/portfolio-6.png';
import image7 from '../assets/process-imgs/portfolio-7.png';
import image8 from '../assets/process-imgs/portfolio-8.png';

const ProcessSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 150px;
    margin-bottom: 150px;
    /* background-color: coral; */

`;

const ProgressText = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 90%; */
    width: 25%;
    /* background-color: lavender; */
    border: 5px solid lavender;
    justify-content: space-evenly;

    p {
        color: #FFE600;
        font-weight: 800;
        font-size: 100px;
        margin: 0;
        padding: 0;
    }
`;

const ProgressImgs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 90%; */
    width: 65%;
    /* background-color: lightgreen; */
    border: 5px solid lavender;

    .img-container {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 90%;
        border: 5px solid lavender;
        background-color: yellow;
        /* background-color: lavender; */

        .image-row {
            display:flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
        }

        .bottom-image-row {
            display: flex;
            flex-direction: row;
            border: 1px solid black;
            height: 60%;
            width: 80%;
            background-color: green;

            img {
                width:50%;
            }
        };
        
        img {
            height: 100%;
            /* width: 100%; */
        }
    }
    

    .image {
        /* height: 75%; */
        /* height: 100%; */
        width: 80%;
        background-color: coral;
        border: 1px solid black;
        /* background-size: cover;
        background: transparent url('../assets/process-imgs/portfolio-1.JPG') no-repeat fixed center; */

        img {
            height: 100%;
            width: 100%;
        }
    }
    
`;

class Process extends Component {
    render() {
        return (
            <ProcessSection>
                <ProgressText>
                    <p>ew...</p>
                    <p>ew...</p>
                    <p>ew...</p>
                    <p>ew...</p>
                    <p>okay...</p>
                    <p>okay...</p>
                    <p>okay...</p>
                    <p>okay...</p>
                    <p>better...</p>
                    <p>better...</p>
                    <p>better...</p>
                    <p>better...</p>
                </ProgressText>
                <ProgressImgs>
                    <div className="img-container">
                        <div className="image" style={{marginTop: "-120px"}}>
                            <img src={image1} />
                        </div>
                        <div className="bottom-image-row">
                            <img src={image2} />
                            <img src={image3} />
                        </div>
                    </div>
                    <div class="img-container">
                        <div className="image">
                            <img src={image4} />
                        </div>
                        <div className="image">
                            <img src={image5} />
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="image">
                            <img src={image6} />
                        </div>
                        <div className="image">
                            <img src={image7} />
                        </div>
                    </div>
                    <div class="img-container">
                        <div className="image">
                            <img src={image8} />
                        </div>
                    </div>
                </ProgressImgs>
            </ProcessSection>
        );
    }
}

export default Process;