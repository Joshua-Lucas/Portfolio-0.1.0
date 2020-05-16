import React from 'react';
import {Link} from 'react-router-dom';


const FlashThankYou = () => 
{
        return(
            <div className=" flex flex-col items-center w-full px-16 self-center md:m-auto opacity-100">

                <div className="rounded-full p-4 border-4 border-accent bg fade-in-up ">
                <svg className=" w-16 h-16 lg:w-24 lg:h-24  z-10 fill-current text-accent" strokeWidth="1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45.701 45.7">
                                <path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
                                    c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
                                    c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/>
                </svg>
                    
                </div>
                <div className="flex flex-col justify-center items-center py-10  ">
                    <h1 className="capitalize text-center pb-8 text-3xl lg:text-4xl lg:pb-2">
                        Message sent
                    </h1>
                    <h2 className="capitalize text-center text-lg lg:text-xl">
                        I will get back with you soon.
                    </h2>
                    <Link className="w-11/12 mx-auto text-center p-2 mt-12 rounded-full border-2 border-secondary hover:bg-accent hover:border-accent hover:text-primary lg:w-3/5" to='/'> 
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );

}

export default FlashThankYou;