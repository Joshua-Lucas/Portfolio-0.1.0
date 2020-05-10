import React from 'react';
import tailwindcsslogo from '../../../img/icons/tailwind-css-seeklogo.com.svg';
import Logo from '../../../img/header/JLlogo.svg';
import Social from './Social';

const Footer = () => 
{
    const getCurrentYear = () => 
    {
        const mil = Date.now();
        const sec = mil / 1000; 
        const min = sec/ 60;
        const hour = min/ 60;
        const day = hour/24;
        const year = day /365;
        const currentYear = Math.round(1970 + year);
        return currentYear;
    }


        return(
            <div className="flex flex-col items-center justify-center pb-12 bg-accent" >
                <div>
                    <a href="/"><img className=" w-40 h-40"src={Logo} alt="Joshua Lucas || FullStack Developer"></img></a>
                </div>
                <Social />
                <div className="flex flex-col items-center">
                    <p className="text-base">Developed by me &copy; {getCurrentYear()} </p>
                    <p className="text-xs">Design inspired from Matt Farley's portfolio</p>
                    <p className="pt-10 text-sm">Styled using  
                        <a className="pl-2 font-semibold"href="https://tailwindcss.com/" target="_blank"><img className="inline w-4 h-4"src={tailwindcsslogo}></img> Tailwind CSS</a>
                    </p>
                </div>
            </div>
        );

}

export default Footer;