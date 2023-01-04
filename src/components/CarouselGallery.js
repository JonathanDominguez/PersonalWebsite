import React from 'react'
import '../Styles/Carousel.css';
import metroOneHor from '../assets/Dec21-22(2022)/img001.png'
import metroTwoHor  from '../assets/Dec21-22(2022)/img002.png'
import towerOneVer from '../assets/Dec21-22(2022)/img003.png'
import towerTwoVer from '../assets/Dec21-22(2022)/img004.png'
import policeCarVer from '../assets/Dec21-22(2022)/img005.png'
import buildinGoneVer from '../assets/Dec21-22(2022)/img006.png'
import cityHallVer from '../assets/Dec21-22(2022)/img007.png'
import underPassHor from '../assets/Dec21-22(2022)/img008.png'
import easternBuiVer  from '../assets/Dec21-22(2022)/img0009.png'
import randomBuiVer from '../assets/Dec21-22(2022)/img010.png'
import deloitteBuiVer from '../assets/Dec21-22(2022)/img011.png'
import oldTimesBuiHor from '../assets/Dec21-22(2022)/img012.png'
import bridgeGrafVer from '../assets/Dec21-22(2022)/img013.png'
import bridgeVer from '../assets/Dec21-22(2022)/img014.png'
import cityErrorVer from '../assets/Dec21-22(2022)/img015.png'
import fourthStBridgeVer from '../assets/Dec21-22(2022)/img016.png'

function CarouselGallery() {

    function handleProject() {        
        window.scroll({
            top:950,
            behavior: "smooth"
        })
        console.log('You clicked submit.');
    }
    return (
        <div>
            <div className="parent-images">
                <div className="scrollBar">
                    <div className="child first-child">
                        <img
                            src={randomBuiVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={towerOneVer} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={oldTimesBuiHor} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={easternBuiVer} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={underPassHor} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                </div>
                <div className='arrow-box'>
                    <button className='button-down' onClick={handleProject}>
                        <i className="arrow down"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarouselGallery