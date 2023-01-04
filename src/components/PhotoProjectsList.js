import React from 'react'
// SCSS File
import '../Styles/PhotoProjectsList.css';
import {useState} from 'react';
// Components used
import ImageGrid from './ImageGrid';
// Images used
import buildingGoneVer from '../assets/Dec21-22(2022)/img006.png'
import easternBuiVer  from '../assets/Dec21-22(2022)/img0009.png'
import fourthStBridgeVer from '../assets/Dec21-22(2022)/img016.png'

function ProjectsList() {
    const [isShown, setIsShown] = useState(true);
    // const handleClick = event => {
    //     setIsShown(true);
    //     handleClickScroll()
    // };
    // const handleClickScroll = () => {
    //     setIsShown(current => !current);
    //     setIsShown(true);
    // };
    // const s = () => {    
    //     setIsShown(true);
    //     if(isShown===true){
    //         scrollMe()
    //     }
    // }
    // function scrollMe(){
    //     window.scroll({
    //         top:4000,
    //         behavior: "smooth"
    //     })
    // }
    function handleProject() {     
        setIsShown(true);
        window.scroll({
            top:1900,
            behavior: "smooth"
        })
        console.log('You clicked submit.');
    }
    return (
        <div className='PhotoList-main'>
            <div className="grid-box">
                <div className="grid-showcase-item">
                    <button onClick={handleProject} className="button-project">
                        <img
                            className='images'
                            src={easternBuiVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>All Photos</p>
                    </button>
                </div>
                <div className="grid-showcase-item">
                    <button  className="button-project">
                        <img
                            className='images'
                            src={buildingGoneVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>B&W</p>
                    </button>
                </div>
                <div className="grid-showcase-item">
                    <button className="button-project">
                        <img
                            className='images'
                            src={fourthStBridgeVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>Color (In progress)</p>
                    </button>
                </div>  
            </div>
            <div className='go-here'>
                {isShown && (
                <div >
                    {isShown && <ImageGrid />}
                </div>
                )}
            </div>
        </div>
    )
}
export default ProjectsList