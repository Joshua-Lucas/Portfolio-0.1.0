import React from 'react';


const Contact = () => 
{
    return (
        <div  className="flex justify-center px-4 py-10 bg-accent text-primary">
            <div className="flex flex-col items-center w-full py-12 -mt-24 bg-onyx rounded-lg shadow-xl space-y-12 md:flex-row md:justify-center md:px-6 md:space-y-0 md:w-11/12 lg:w-3/4 2xl:w-3/5">
                <h1 className="w-3/4 text-center font-semibold text-2xl md:w-1/3 ">
                    Let's Work Together!
                </h1>
                <h2 className="w-3/4 text-center text-lg font-thin md:w-1/3 md:px-12 ">
                    Click "contact me" for more information.
                </h2>
                <div className="md:w-1/3 text-center">
                    <a className="border-2 rounded-full p-3 px-8 hover:text-primary border-brand  md:text-lg hover:bg-brand " href="/contact">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
       
    );
    
}

export default Contact;