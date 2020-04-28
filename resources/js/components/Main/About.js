import React from 'react';


const About = () => 
{
    return (
        <div className="flex flex-col items-center -mt-1 px-5 text-primary bg-accent sm:-mt-2 lg:-mt-1 xl:-m-3">
           <div className="lg:w-3/5 pt-20">
                <h2 className=" font-accent text-center text-2xl font-semibold md:text-3xl lg:text-4xl ">Hi, my name is Joshua Lucas.</h2>
                <p className="text-center pt-6 leading-normal text-lg md:text-xl md:px-16 ">I am an aspiring full stack developer who is passionate about developing intuitive, responsive software with the user in mind. I am driven,  hardworking, honest, and a loyal team player. I am a quick learner, perpetually seeking to sharpen my skills and grow in my knowledge of software development. </p>  
                <p className="text-center py-6 leading-normal text-lg md:text-xl  md:px-16 ">When I am not at my computer, you can find me enjoying the outdoors with my wife, trying a new restaurant, or sharing a conversation with a friend over a cup of coffee. </p>
            </div>
        </div>
       
    );



}

export default About;