import React from 'react';
import ProjectContainer from './projects/ProjectContainer';
import Github from '../../../img/Icons/Github.svg';
// import Projects from '../../../data/WorksData';




const Works = () => 
{
    return (
        <div className="flex flex-col items-center" >
            <div id='works'>
                <h1 className="font-accent text-center text-2xl font-semibold md:text-3xl lg:text-4xl">My Works</h1>
            </div>
            
               {/* <ProjectContainer /> */}
            
            <a className="hover:text-secondary md:border-2 md:border-secondary md:rounded-full md:px-2 md:hover:bg-secondary md:hover:text-primary" href="https://github.com/Joshua-Lucas">
                <img className="inline" src={Github}></img>
                See Projects I'm Working On 
            </a>
        
        </div>
    );

}

export default Works;