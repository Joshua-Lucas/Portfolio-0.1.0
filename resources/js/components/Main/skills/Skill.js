import React from 'react';
import Frontend from '../../../../img/frontend.svg';
import { Backend } from '../../../../data/SkillsData';




const Skill = ({img,title,description,section1,language,section2,tools,key}) => 
{

    return (
        <div className=" flex flex-col bg-primary w-2/3 m-auto rounded-lg shadow-xl items-center" >
            <img src={img === 2 ? Frontend : 'test'}  ></img>
            <h1 className="">{title}</h1>
            <p>{description}</p>
            <div>
                <h2>{section1}</h2>
                <p>{language}</p>
            </div>
            <div>
                <h2>{section2}</h2>
                <ul>
                    {tools}
                </ul>
            </div>
        </div>
    );

}

export default Skill;