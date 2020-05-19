import React from 'react';
import setup from '../../../img/setup3.svg';

const Banner = () => 
{
    return (
        <div className="flex flex-col items-center mt-10 px-5 ">
            <div className=" flex flex-col pb-12 items-start sm:items-center ">
                <h1 className="leading-normal text-xl sm:text-center lg:text-4xl">
                    A Louisville based 
                    <span className="text-accent font-accent leading-none inline-block pt-1 text-6xl md:pl-2 lg:inline">FullStack Developer</span>
                </h1>
                <h2 className="pt-1 text-xl"> 
                    Creating intuitive and responsive software with people in mind
                </h2>
                <div className="mt-4 self-center ">
                   <img className=" w-56 h-56  lg:w-64 lg:h-64 rounded-full border-2 border-secondary shadow-lg " src="https://res.cloudinary.com/jlucompany/image/upload/v1589583341/Portfolio/Headshot_wwybb2.jpg" alt="Pic of me"></img>
                </div>
            </div>
            <div className=" pb-2/4 w-11/12 relative flex justify-center sm:w-5/6 md:w-4/6 md:pb-1/3 lg:pb-1/3 lg:w-7/12 lg:mb-0 xl:w-1/2 xl:pb-1/4 2xl:w-5/12 ">
                <img className=" absolute bottom-0 w-full h-auto  md:pb-0.25 lg:pb-0 xl:pb-0.75 2xl:pb-0.75"src={setup} alt="my setup"></img>
            </div>
        </div>

    );



}

export default Banner;