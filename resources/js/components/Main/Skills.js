import React from 'react';
import SkillsContainer from './skills/SkillsContainer';
import {Backend, Frontend, softSkills} from '../../../data/SkillsData';



const Skills = () => 
{
    return (
        <div className="flex flex-col justify-center -mt-20" >
            <SkillsContainer data={Frontend}/>
        </div>
    );

}

export default Skills;