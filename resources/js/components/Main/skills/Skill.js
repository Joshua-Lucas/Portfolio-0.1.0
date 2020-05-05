import React from 'react';
import Frontend from '../../../../img/Skills/frontend.svg';
import Backend from '../../../../img/Skills/backend.svg';
import Team from '../../../../img/Skills/team.svg';







const Skill = ({img,title,description,section1,language,section2,tools,key}) => 
{

    return (
        <div className=" flex flex-col bg-primary w-5/6 m-auto px-4 py-12 text-xl rounded-lg shadow-xl items-center md:m-0 md:space-y-8 lg:px-12 lg:py-20 " >
            <div clssName="">
                <img className="w-32 h-32 " src={img === 1 ? Backend : img === 2 ? Frontend : Team} alt={title} ></img>
            </div>
            <div className="text-center pt-5  md:p-0 ">
                <h1 className="pb-5 text-2xl font-bold capitalize md:p-0 ">{title}</h1>
                <p className="font-thin">{description}</p>
            </div>
            <div className="py-12 text-center md:p-0">
                <h2 className="pb-2 text-accent md:p-0">{section1}</h2>
                <p className="font-thin">{language}</p>
            </div>
            <div className="text-center" >
                <h2 className="pb-2 text-accent md:p-0">{section2}</h2>
                <ul className="font-thin">
                    {tools}
                </ul>
            </div>
        </div>
    );

}

export default Skill;