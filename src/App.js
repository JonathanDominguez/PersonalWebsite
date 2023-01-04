import './App.css';
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar';
import AboutMePage from './Pages/AboutMePage';
import GalleryPage from './Pages/GalleryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const firstProjectTags = ["React.js", "HTML", "CSS", "JavaScript"];
    return (
        <Router>
        <NavBar />
        <Routes>
            <Route path='/home' exact element={<HomePage/>} />
            <Route path='/about' element={<AboutMePage/>} />
            <Route path='/gallery' element={<GalleryPage/>} />
            {/* <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={Teams} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
        </Router>
        // <div>
            // {/* <Router>
            //     <Switch>
            //         <Route exact path = '/'>
            //             <HomePage />
            //         </Route>
            //         <Route exact path = '/About'>
            //             <AboutMePage />
            //         </Route>
            //     </Switch>
            // </Router> */}
        //     <HomePage/>
        // </div>
        // <Router>
        //     <div className="App">
        //         <NavBar />
        //         <Switch>
        //             <Route path="/" exact component={HomePage} />
        //             <Route path="/about" component={AboutMePage} />
        //             {/* <Route path="/shop" component={Shop} /> */}
        //         </Switch>
        //     </div>
        // </Router>
            
    );
    }

export default App;