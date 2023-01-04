import React from 'react'
import Carousel from '../components/CarouselGallery';
import ImageGrid from '../components/ImageGrid';
import PhotoProjectsList from '../components/PhotoProjectsList';

import '../Styles/GalleryPage.css';

import {useEffect} from 'react';


function GalleryPage() {
    useEffect(() => {
        const allWithClass = Array.from(
            document.getElementsByClassName('example')
        );
        console.log(allWithClass);
    }, []);



    
    return (
        <div className='main'>
            {/* <div className="left-bar-gallery"></div> */}
            <p className='name-title-gallery'>Jonathan Dominguez</p>
            <Carousel/> 
            {/* <div className="right-bar-gallery"></div> */}
            <div>
            </div>
            <PhotoProjectsList/>
            {/* <div className='select-photo-nav'>
                <ul>
                    <li><a href="#home">B&W</a></li>
                    <li><a href="#news">Color</a></li>
                    <li><a href="#contact">Projects</a></li>
                </ul>
            </div>
            <ImageGrid/> */}
        </div>
    )
}

export default GalleryPage