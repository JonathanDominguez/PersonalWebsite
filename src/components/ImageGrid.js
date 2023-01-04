import React from 'react'
import '../Styles/ImageGrid.css';


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


function ImageGrid() {
    return (
    <div className='main'>
   
        <div className="row"> 
                <div className="column">
                    <img src={metroOneHor} style={{width:"100%"}} alt="random"/>
                    <img src={metroTwoHor} style={{width:"100%"}} alt="random"/>
                    <img src={towerOneVer} style={{width:"100%"}} alt="random"/>
                    <img src={towerTwoVer} style={{width:"100%"}} alt="random"/>
                    <img src={policeCarVer} style={{width:"100%"}} alt="random"/>
                </div>
                <div className="column">
                    <img src={underPassHor} style={{width:"100%"}} alt="random"/>
                    <img src={easternBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={randomBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={deloitteBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={oldTimesBuiHor} style={{width:"100%"}} alt="random"/>
                </div>  
                <div className="column">
                    <img src={cityErrorVer} style={{width:"100%"}} alt="random"/>
                    <img src={fourthStBridgeVer} style={{width:"100%"}} alt="random"/>
                    <img src={cityHallVer} style={{width:"100%"}} alt="random"/>
                    <img src={bridgeGrafVer} style={{width:"100%"}} alt="random"/>
                    <img src={buildinGoneVer} style={{width:"100%"}} alt="random"/>
                    <img src={bridgeVer} style={{width:"100%"}} alt="random"/>
                    {/* <img src={horizontal} style={{width:"100%"}} alt="random"/>
                    <img src={vertical} style={{width:"100%"}} alt="random"/>
                    <img src={vertical} style={{width:"100%"}} alt="random"/>
                    <img src={horizontal} style={{width:"100%"}} alt="random"/> */}
                </div>
            </div>
    </div>
  )
}

export default ImageGrid