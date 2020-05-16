import React from 'react';
import Skill from './Skill';



const SkillsContainer = ({data}) => 
{
    
    const Skills = data.map(skill =>
    {
        return <Skill 
                key={skill.id}
                img={skill.img_src}
                title={skill.title}        
                description={skill.description}
                section1={skill.section1} 
                language={skill.language.join(', ')}
                section2={skill.section2}
                tools={skill.tools.map(tool => 
                     <li key={tool}>
                         {tool}
                    </li> 
                )}
                />
    });

    return (
        <React.Fragment>
            {Skills}
        </React.Fragment>
    );

}

export default SkillsContainer;