import React from 'react';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';


const Main = () => 
{
    return (
        <React.Fragment>
            <About />
            <Skills />
            <Works />
            <Contact />
        </React.Fragment>
    );

}

export default Main;