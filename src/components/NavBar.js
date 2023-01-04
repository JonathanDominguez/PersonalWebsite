import React from 'react'
import '../Styles/NavBar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function NavBar() {
    // Project Function


    function handleProject() {        
        window.scroll({
            top:987,
            behavior: "smooth"
        })
        console.log('You clicked submit.');
    }
    // Changing nav className
    let currentPage = window.location.href
    const location = useLocation();
    // console.log(location)
    let classNameBox = "box-this"
    let classNameText = "text-this"
    if (currentPage === "http://localhost:3000/about" ) {
        // currentPage === "http://localhost:3000/gallery"
        classNameBox = "box-this-about-me"
        classNameText = "text-this-about-me"
    } 
    else {
        classNameBox = "box-this";
        classNameText = "text-this";
    }

    if(currentPage!=="http://localhost:3000/"){
        console.log("not in about page")
    }
    return (
        <div>
            <div className="main-container" >
                <div className="flex-child">
                    <div className={classNameBox}></div>
                    <button className="nav-button">
                        <Link style={{textDecoration: 'none'}} to="home">
                            <p className={classNameText}>Home</p>
                        </Link>
                    </button>
                </div>
                <div className="flex-child">
                    <div className={classNameBox}></div>

                    <button className="nav-button" onClick={handleProject}>

                    <Link style={{textDecoration: 'none'}} to="home">
                        {/* <button className="nav-button" onClick={handleProject}> */}
                                <p className={classNameText}>Projects</p>
                        {/* </button> */}
                    </Link>
                    </button>


                </div>
                <div className="flex-child">
                    <div className={classNameBox}></div>
                    <button className="nav-button">
                        <Link style={{textDecoration: 'none'}} to="about">
                            <p className={classNameText}>About</p>
                        </Link>
                    </button>
                </div>
                {/* <div className="flex-child">
                    <div className={classNameBox}></div>
                    <button className="nav-button">
                        <Link style={{textDecoration: 'none'}} to="gallery">
                            <p className={classNameText}>Gallery</p>
                        </Link>
                    </button>
                </div> */}
                <div className="flex-child">
                    <div className={classNameBox}></div>
                    <a className="button-resume" href={require('../Documents/JonathanDominguez.pdf')} download="JonathanDominguez">
                        <button className="nav-button">
                            <p className={classNameText}>Resume</p>
                        </button>
                    </a>
                </div>
            </div>            
        </div>
    )
}

export default NavBar