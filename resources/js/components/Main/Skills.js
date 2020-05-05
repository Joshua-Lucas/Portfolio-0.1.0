import React from 'react';
import SkillsContainer from './skills/SkillsContainer';
import {Backend, Frontend, softSkills} from '../../../data/SkillsData';



const Skills = () => 
{
    return (
        <div className="flex flex-col justify-center -mt-20 divide-y divide-secondary md:flex-row md:divide-x md:max-w-3/4 md:mx-auto" >
            <SkillsContainer data={Frontend} />
            <SkillsContainer data={Backend}/>
            <SkillsContainer data={softSkills}/>
        </div>
    );

}

export default Skills;