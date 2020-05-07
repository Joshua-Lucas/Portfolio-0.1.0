import React from 'react';
import Project from './Project';



const ProjectContainer = ({data}) => 
{
    const Projects = data.map((project) =>
    {
        return <Project 
                key={project.id}
                img_src={project.img_src}
                title={project.title}        
                description={project.description}
                link={project.link}
                />
    });

    return (
        <React.Fragment>
            {Projects}
        </React.Fragment>
    );

}

export default ProjectContainer;