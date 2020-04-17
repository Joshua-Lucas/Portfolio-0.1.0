import React, {useState} from 'react';

const Nav = () => 
{
    const [isToggled, setIsToggled] = useState(false);
   
    return (
        <div className=' md:flex md:flex-row md:justify-between md:items-center md:mt-4 md:px-4 md:text-xl md:text-center  '>
            <div className="mt-4 px-4 flex font-accent items-center justify-between md:justify-around md:mt-0 ">
                <div className="md:py-2">
                    <a href="/"><img src="" alt="Joshua Lucas | Fullstack Developer"></img></a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsToggled(!isToggled)} className="hover:text-accent">
                        <svg className="mt-2 h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                            {isToggled
                                ?<path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                                : <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>  
                            }
                        </svg>
                    </button>
                </div>
            </div>
            <div className={isToggled ? 'flex flex-col items-center mt-2 bg-accent text-primary ' : 'hidden md:flex md:flex-row md:justify-between md:text-xl md:text-center'} >
                <a className="w-3/4 py-3 text-center hover:text-brand md:pr-10 md:py-2"href="#about">About</a>
                <a className="w-3/4 py-3 text-center hover:text-brand md:pr-10 md:py-2 "href="#works">Works</a>
                <a className="w-3/4 py-3 text-center hover:text-brand md:pr-8 md:py-2"href="#testimonials">Testimonials</a>
                <a className="w-3/4 py-3 text-center hover:text-brand md:border-2 md:border-brand md:rounded-full md:px-2 md:py-2  md:hover:bg-brand md:hover:text-primary"href="#contact">Contact</a>
            </div>
        </div>

    );

}

export default Nav;