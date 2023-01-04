import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from '../Pages/HomePage';
// import Projects from '../components/Projects';
import AboutMePage from '../Pages/AboutMePage';
// import GalleryPage from '../Pages/GalleryPage';

function AppRouter() {
    return (
        <div>
            
        </div>
        // <BrowserRouter>
        //     <Routes>
        //             <Route exact path="/home" element={HomePage}/>
        //             <Route exact path="/">
        //                 <Navigate to="/Home" />
        //             </Route>

        //             <Route exact path="/About" element={
        //                 <AboutMePage/>
        //             }/>

        //     </Routes>
        // </BrowserRouter>
    )
}

export default AppRouter