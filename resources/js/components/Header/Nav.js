import React from 'react';

const Nav = () => 
{
    return (
        <div className=' mt-4 flex font-accent lg:justify-around '>
            <div className="">
                <a href="/"><img src="" alt="Joshua Lucas | Fullstack Developer"></img></a>
            </div>
            <div className="flex lg:justify-between lg:text-xl lg:text-center">
                <a className="lg:pr-10 py-2"href="#about">About</a>
                <a className="lg:pr-10 py-2 "href="#works">Works</a>
                <a className="lg:pr-8 py-2"href="#testimonials">Testimonials</a>
                <a className=" lg:border-2 lg:border-brand lg:rounded-full lg:py-1 lg:px-2 hover:bg-brand hover:text-primary"href="#contact">Contact</a>

            </div>
        </div>

    );

}

export default Nav;