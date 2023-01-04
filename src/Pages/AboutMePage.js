import React from 'react'
import '../Styles/AboutMe.css';
import MainPic from '../assets/AboutMePic.jpg'
import SniffyBlackOutline from '../assets/sniffyBlackOutline.png'

function AboutMePage() {
    return (
        <div className="AboutMePage-body">
            <img className="logoForSniffy" src={SniffyBlackOutline} alt="sniffyLogo" width="100em" height="100em"/>
            <div className="imageBox">
                <img className="imageOfMe"src={MainPic} alt="PicOfMe"/>
            </div>
            <div className="info-text-box">
                <h3 className="name-title-about">Jonathan Dominguez</h3>
                <p className="info-box">
                    I'm from South Los Angeles. I first began my coding journey back in 2013 before entering my freshman year of High School, when I took a summer boot camp on tech startups. 
                    Since those summers, I have not looked back I am now currently attending UC Santa Cruz studying Cognitive Science.    
                    I have developed a wide variety of skills from my previous tech roles and from classes I have taken as a Cognitive Science major at University of California. 
                    I have previously worked as a Front-End Developer and Tech Lead at Teens Exploring Technology. 
                    As a Front-End Developer, I produced high-quality mockups, designed 2 prototypes, and 3 wireframes that fit the client’s requirements, balancing functional and aesthetic designs using Figma. 
                    I translated self-created UI/UX design to develop cross-browser and mobile compatible website using HTML5, CSS3, JavaScript (React.js). 
                    I have also worked on multiple projects where I have had to either create native mobile applications, non-native mobile applications, and websites. 
                    One of these projects was a cross-browser and mobile-compatible website that converts a user's input of past work history and generates a resume based on a selected template. 
                    At one point I was responsible for managing up to 10 teams that were creating non-native mobile applications that required their own different features to build out. 
                    During one of my summers in High School, I created my first native mobile application using Swift which allowed unknown High School students to become known to college sports recruiters. 
                    Some of the courses I have taken include: Natural and Artificial Intelligence, Artificial Intelligence and Music, Foundations of Video Game Design, Visual and Spatial Cognition, Psychological Data Analysis, Perception, Visual and Spatial Cognition, Invented Languages.
                </p>
            </div>
        </div>
    )
}

export default AboutMePage