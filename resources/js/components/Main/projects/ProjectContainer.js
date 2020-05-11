import React,{ useState, useEffect} from 'react';
import Project from './Project';



const ProjectContainer = () => 
{
    const [Projects, setProjects] = useState([]); 

    // Fetches data from Projects Table
    useEffect(() => {
        fetch('/api/projects')
        .then(resp =>  resp.json())
        .then(projects => setProjects(projects))
    }, []);


     const work = Projects.map((project) =>
    {
        return <Project 
                key={project.id}
                img_src={project.img_src}
                title={project.title}        
                description={project.description}
                link={project.link}
                />
    });


    // const work = data.map((project) =>
    // {
    //     return <Project 
    //             key={project.id}
    //             img_src={project.img_src}
    //             title={project.title}        
    //             description={project.description}
    //             link={project.link}
    //             />
    // });

    return (
        <React.Fragment>
            {work}
        </React.Fragment>
    );

}

export default ProjectContainer;