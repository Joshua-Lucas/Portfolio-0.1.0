import React from 'react';
import tailwindcsslogo from '../../../img/icons/tailwind-css-seeklogo.com.svg';
import Logo from '../../../img/header/JLlogo.svg';
import Social from './Social';

const Footer = () => 
{
    const getCurrentYear = new Date()


    return(
        <div className="flex flex-col items-center justify-center pb-12 bg-accent" >
            <div>
                <a href="/"><img className=" w-40 h-40"src={Logo} alt="Joshua Lucas || FullStack Developer"></img></a>
            </div>
            <Social />
            <div className="flex flex-col items-center">
                <p className="text-base">Developed by me &copy; {getCurrentYear.getFullYear()} </p>
                <p className="text-xs">Design inspired by Matt Farley's portfolio</p>
                <p className="pt-10 text-sm">Styled using  
                    <a className="pl-2 font-semibold"href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
                        <img className="inline w-4 h-4"src={tailwindcsslogo} alt="Taillwind css Logo"></img>
                        Tailwind CSS
                    </a>
                </p>
            </div>
        </div>
    );

}

export default Footer;