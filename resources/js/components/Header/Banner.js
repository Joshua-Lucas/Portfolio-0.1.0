import React from 'react';
import Placeholder from '../../../img/profilePlaceholder.svg';
import setup from '../../../img/setup3.svg';

const Banner = () => 
{
    return (
        <div className="flex flex-col items-center mt-10 px-5 ">
            <div className=" flex flex-col pb-12 items-start sm:items-center ">
                <h1 className="leading-normal text-xl sm:text-center lg:text-4xl">A Louisville based <span className="text-accent font-accent leading-none inline-block pt-1 text-6xl lg:inline">Full Stack Developer</span></h1>
                <h2 className="pt-1 text-xl"> Creating intuitive and responsive software with people in mind</h2>
                <div className="mt-4 self-center">
                   <img className=" w-56 h-56 pb-2 lg:w-64 lg:h-64" src={Placeholder} alt="Pic of me"></img>
                </div>
            </div>
            <div className="flex justify-center lg:m-8 lg:mb-0 w-full h-full ">
                <img class=" w-11/12 h-auto sm:w-5/6 md:w-9/12 lg:w-5/12 xl:pb-1 2xl:pb-0.5 "src={setup} alt="my setup"></img>
            </div>
        </div>

    );



}

export default Banner;