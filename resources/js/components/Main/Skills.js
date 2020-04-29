import React from 'react';
import SkillsContainer from './skills/SkillsContainer';
import {Backend, Frontend, softSkills} from '../../../data/SkillsData';



const Skills = () => 
{
    return (
        <div className="bg-primary mt-8" >
            <SkillsContainer data={Frontend}/>
        </div>
    );

}

export default Skills;