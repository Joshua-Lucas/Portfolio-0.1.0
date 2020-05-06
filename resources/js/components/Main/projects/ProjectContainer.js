import React from 'react';
import Project from './Project'



const ProjectContainer = ({data}) => 
{
    const Skills = data.map(project =>
    {
        return <Project 
                key={project.id}
                title={project.title}        
                description={project.description}
                link={project.link}
                />
    });

    return (
        <React.Fragment>
            {Skills}
        </React.Fragment>
    );

}

export default ProjectContainer;