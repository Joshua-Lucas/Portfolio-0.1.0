import React from 'react';


const Contact = () => 
{
    return (
        <div id="contact" className="flex justify-center py-10 bg-accent text-primary">
            <div className="flex justify-center items-center w-2/3 py-12 -mt-24 bg-onyx rounded-lg shadow-xl space-x-32">
                <h1 className="font-semibold text-xl">Let's Make Something Awesome!</h1>
                <h2 className="w-1/3 text-center text-lg font-thin">Intrested in working together or want more information? Let's schedule a time.</h2>
                <a className="border-2 rounded-full p-2 hover:text-primary md:border-2 border-brand md:rounded-full md:px-6 md:text-lg hover:bg-brand md:hover:text-primary">Contact Me</a>
            </div>
        </div>
       
    );
    
}

export default Contact;