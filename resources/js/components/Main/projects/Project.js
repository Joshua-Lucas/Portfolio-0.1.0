import React from 'react';


const Project = ({img_src, title, description,link}) => 
{
    return(
        <div className="grid grid-rows-2 ">
            <figure>
                {/* Photo by Inês Ferreira on Unsplash and Photo by Inês Ferreira on Unsplash */}
                <img className="hover:opacity-0" src={img_src} alt={title}></img>
                <figcaption className="flex flex-col items-center opacity-0 hover:opacity-100">
                    <h2>{description}</h2>
                    <a href={link}>Visit Website</a>
                </figcaption>
            </figure>
        </div>
    );



}

export default Project