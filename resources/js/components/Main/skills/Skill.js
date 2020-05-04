import React from 'react';
import Frontend from '../../../../img/Skills/frontend.svg';
import Backend from '../../../../img/Skills/backend.svg';
import Team from '../../../../img/Skills/team.svg';







const Skill = ({img,title,description,section1,language,section2,tools,key}) => 
{

    return (
        <div className=" flex flex-col bg-primary w-2/3 m-auto px-4 py-6 rounded-lg shadow-xl items-center lg:px-12 lg:py-20" >
            <div>
                <img className="w-32 h-32 " src={img === 1 ? Backend : img === 2 ? Frontend : Team} alt={title} ></img>
            </div>
            <div className="text-center pt-5 ">
                <h1 className="pb-5 font-bold capitalize">{title}</h1>
                <p>{description}</p>
            </div>
            <div className="py-12 text-center">
                <h2 className="pb-2 text-accent">{section1}</h2>
                <p>{language}</p>
            </div>
            <div className="text-center" >
                <h2 className="pb-2 text-accent">{section2}</h2>
                <ul>
                    {tools}
                </ul>
            </div>
        </div>
    );

}

export default Skill;