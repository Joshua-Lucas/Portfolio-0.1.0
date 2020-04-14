import React from 'react';

const Nav = () => 
{
    return (
        <div className=' m-1 flex justify-around'>
            <div className="">
                <a href="/"><img src="" alt="Logo"></img></a>
            </div>
            <div className="flex justify-between">
                <a className="pr-2"href="#about">About</a>
                <a className="pr-2"href="#works">Works</a>
                <a className="pr-2"href="#testimonials">Testimonials</a>
                <a className="pr-2"href="#contact">Contact</a>

            </div>
        </div>

    );

}

export default Nav;