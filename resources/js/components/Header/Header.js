import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner'

const Header = () => 
{
        return(
            <div className="fade-in-up">
                <Nav />
                <Banner />  
            </div>
        );

}

export default Header;