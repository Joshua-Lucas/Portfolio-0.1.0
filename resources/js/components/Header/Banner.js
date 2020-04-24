import React from 'react';
import Placeholder from '../../../img/profilePlaceholder.svg';
import setup from '../../../img/setup3.svg';

const Banner = () => 
{
    return (
        <div className="flex flex-col items-center mt-10 px-3  lg:max-h-screen">
            <div className=" flex flex-col pb-12 items-center ">
                <h1 className="font-accent leading-none text-2xl lg:text-4xl">A Louisville based <span className="text-accent text-4xl text-6xl">FullStack Developer</span></h1>
                <h2 className="text-xl"> Creating intuitive and responsive software with people in mind</h2>
                <div className="mt-4">
                   <img className="w-64 h-64" src={Placeholder} alt="Pic of me"></img>
                </div>
            </div>
            <div className="flex justify-center lg:m-8 w-5/12 h-full ">
                <img class=" w-4/5 h-auto"src={setup} alt="my setup"></img>
            </div>
        </div>

    );



}

export default Banner;