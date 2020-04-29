import React from 'react';
import Skill from './Skill';



const SkillsContainer = ({data}) => 
{
    const Skills = data.map(skill =>
    {
        return <Skill 
                img={skill.img_src}
                title={skill.title}        
                description={skill.description}
                section1={skill.section1} 
                language={skill.language.join(', ')}
                section2={skill.section2}
                tools={skill.tools.map(tool => {return <li>{tool}</li>})}
                key={skill.key}
                />
    });

    return (
        <React.Fragment>
            {Skills}
        </React.Fragment>
    );

}

export default SkillsContainer;