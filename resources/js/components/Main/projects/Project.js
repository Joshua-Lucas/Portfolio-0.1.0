import React from 'react';


const Project = ({img_src, title, description,link}) => 
{
    return(
        <div className=" block w-full md:w-1/2 lg:w-1/2 2xl:w-2/5 p-3 ">
            <figure className="block relative overflow-hidden rounded-lg pt-64 shadow-lg">
                {/* Photo by Inês Ferreira on Unsplash and Photo by Inês Ferreira on Unsplash */}
                <img className="block w-full h-full absolute inset-0 scale-100 transition-all ease-in delay-300 transform hover:scale-110 " src={img_src} alt={title}></img>
                <figcaption className="flex flex-col justify-center absolute inset-0 w-full h-full px-6 opacity-0 text-primary text-base z-10 bg-onyx transition-all ease-in-out duration-500 scale-150 hover:opacity-100 lg:text-lg ">
                    <h2 className="text-center mb-8 break-words ">{description}</h2>
                    <a className="text-center lg:w-3/5 self-center border-2 border-brand rounded-full  py-2 px-2 hover:bg-brand hover:text-primary" href={link} rel="noreferrer" target='_blank'>Visit Website</a>
                </figcaption>
            </figure>
        </div>
    );



}

export default Project