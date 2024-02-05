import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../containers/Home';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Router>
            <Navbar/>
                <Routes>
                  <Route path="/portfolio/" element={<Home/>}/>
                  <Route path="/portfolio/about" element={<AboutMe/>}/>
                </Routes>
            </Router>
        </React.StrictMode>
    )
}


