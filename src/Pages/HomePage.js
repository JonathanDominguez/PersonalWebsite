import React from 'react';
import '../Styles/HomePage.css';
import sniffyLogo from '../assets/sniffyWhiteOutline.png';
import instagram from '../assets/instagramLogo.png';
import gitHub from '../assets/GitHub-Mark-Light.png';
import linkedIn from '../assets/linkedIn.png';
import Projects from '../components/Projects';
// Notes:
// Problems so far 
    // Not responsive yet
// Projects Information
    // CNN Project
import CNNup from '../assets/CNN-UpRight.png';
import CNNlaying from '../assets/CNN-LayDown.png';
import cnnPDF from '../Documents/CNN_Proposal.pdf';
import gameFile from '../Documents/GroceryDash.c3p'
    // Game created 
import GDcomputer from '../assets/GDcomputer.png'
import GDipad from '../assets/GDIpad.png'
    // Resume
import ResGenComputer from '../assets/ResumeGenCom.png'
import ResGenIphoneOne from '../assets/ResGenIphoneOne.png'
// import ResGenIphoneTwo from '../assets/ResGenIphoneTwo.png'

function HomePage() {
    // Tags for projects
        // Tags for CNN project
    const firstProjectTags = ["Machine Learning", "CNN"];
    const secondProjectTags = ["React.js", "HTML", "CSS", "JavaScript"];
    const thirdProjectTags = ["JavaScript"];
    const linkToSummerWeb = "https://summer2021-app.vercel.app/";

    return (
        <div>
            <img className="logo" src={sniffyLogo} alt="Beagle" width="100em" height="100em"></img>
            <div className="left-bar"></div>
            <div className="text-info-box">
                <p className="text-one">HELLO I'M</p>
                <p className="text-two">JONATHAN DOMINGUEZ</p>
                <p className="text-three">Front-End Developer | Machine Learning | Software Engineer </p>
                <p className="text-four">
                <a className="button-resume" href={require('../Documents/JonathanDominguez.pdf')} target="_blank" rel="noopener noreferrer" download="JonathanDominguez">Download My Resume</a>
                </p>
            </div>
            <div className="right-bar"></div>
            <div className="logo-container">
                {/* Instagram logo */}
                <div className="icon">
                <a href="https://www.instagram.com/jonathans.film/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="linkedIn" width="50em" height="50em"></img>
                </a>
                </div>
                {/* Github logo */}
                <div className="icon">
                <a href="https://github.com/JonathanDominguez" target="_blank" rel="noopener noreferrer">
                    <img src={gitHub} alt="gitHub" width="50em" height="50em"></img>
                </a>
                </div>
                {/* LinkedIn logo */}
                <div className="icon">
                <a href="https://www.linkedin.com/in/jonathandom/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="linkedIn" width="50em" height="50em"></img>
                </a>
                </div>
            </div>
            {/* Projects List */}
                {/* CNN Project */}
            <Projects 
                projectTitle="Convolutional Neural Network"
                projectFrom="University Course Work"
                projectInfo="Paper proposing possible way to use CNN to identifying structural damage within reinforced concrete using Radiographs, also known as X-rays"
                projectTags={firstProjectTags}
                typeOfProject={"Download Paper"}
                srcImageOne={CNNup}
                srcImageTwo={CNNlaying}
                fileName={"CNNpdf"}
                linkToProject={cnnPDF}
            />
                {/* Resume Project */}
            <Projects 
                projectTitle="Resume Generator"
                projectFrom="Internship Project"
                projectInfo="Created a website through React.js to generate both resumes and cover letters based on user input and a pre-designed template"
                projectTags={secondProjectTags}
                typeOfProject={"View Website"}
                srcImageOne={GDcomputer}
                srcImageTwo={GDipad}
                linkToProject={linkToSummerWeb}
            />
                {/* Video game created */}
            <Projects 
                projectTitle="Grocery Dash"
                projectFrom="University Course Work"
                projectInfo="An interactive game developed on Construct using the JavaScript languageThe goal of the game is to collect all the items and return to the check out before times runs out. Player must navigate using the arrow keys and avoid obstacles such as running into children and other customers"
                projectTags={thirdProjectTags}
                typeOfProject={"Download Game"}
                srcImageOne={ResGenComputer}
                srcImageTwo={ResGenIphoneOne}
                fileName={"GroceryDashGame"}
                linkToProject={gameFile}
            />
        </div>
    )
}

export default HomePage 