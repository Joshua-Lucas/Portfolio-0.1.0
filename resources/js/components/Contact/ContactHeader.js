import React from 'react';


const ContactHeader = () => 
{
        return(
            <div className="flex border-b-2 p-8 xl:px-40">
                <a href="/">
                    <svg className="w-8 h-8 fill-current text-onyx xl:w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path  d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
                </a>
            </div>
        );

}

export default ContactHeader;