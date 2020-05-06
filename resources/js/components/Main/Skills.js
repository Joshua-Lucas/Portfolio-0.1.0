import React from 'react';
import SkillsContainer from './skills/SkillsContainer';
import {Backend, Frontend, softSkills} from '../../../data/SkillsData';



const Skills = () => 
{
    return (
        <div className="flex flex-col justify-center -mt-20 mb-20 divide-y divide-secondary md:flex-row md:divide-x md:w-11/12 md:mx-auto lg:w-11/12 xl:w-3/4 2xl:w-8/12 " >
            <SkillsContainer data={Frontend} />
            <SkillsContainer data={Backend}/>
            <SkillsContainer data={softSkills}/>
        </div>
    );

}

export default Skills;