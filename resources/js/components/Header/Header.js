import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner'

const Header = () => 
{
        return(
            <div className="h-screen">
                <Nav />
                <Banner />  
            </div>
        );

}

export default Header;