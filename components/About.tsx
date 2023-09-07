import React from 'react'
import Image from 'next/image'

const skills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'Python'},
    {skill: 'Javacript'},
    {skill: 'TypeScript'},
    {skill: 'React'},
    {skill: 'Next'},
    {skill: 'Flask'},
    {skill: 'Tailwind CSS'},
    {skill: 'Git'},
    {skill: 'GitHub'},
]

const About = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                    <p>
                        By day I am a
                        <span className='font-bold'>{" professional triathlete"}</span>,
                        <span className='font-bold'>{" endurance sports coach"}</span>, math
                        <span className='font-bold'>{" math tutor"}</span>.
                        By night, I am a software developer pursing my passion for
                        <span className='font-bold'>{" learning"}</span>,
                        <span className='font-bold'>{" problem solving"}</span>, and
                        <span className='font-bold'>{" creating "}</span>
                        tech that excites me.
                    </p>
                    <br />
                    <p>
                        I graduated from California Polytechnic State University, San Luis Obispo, with a Bachelor's
                        in Biological Science in 2018. My academic journey instilled in me a rigorous approach to
                        problem-solving and the importance of attention to detail. 
                    </p>
                    <br />
                    <p>
                        After school, I had the opportunity to purse the dream of elite sport and spent the
                        next several years in pursuit of that. I finished out my amauter career with a
                        <span className='font-bold'>{" Ironman 70.3 World Championship title "}</span>
                        in 2021 and a 2nd place finish at the
                        <span className='font-bold'>{" 2022 Ironman World Championships "}</span>
                        in Kona, Hawaii where I also went viral on several platforms for the events that occured at the finish.
                    </p>
                    <br />
                    <p>
                        As a professional triathlete and endurance sports coach, I've learned discipline, resilience, and effective
                        time management. Competing internationally in Ironman events, I've honed my ability to perform under pressure,
                        adapt to diverse conditions, and push past limitations.
                    </p>
                    <br />
                    <p>
                        I have always been interested in puzzles and leveraging technology to solve
                        problems a 12-week intensive full-stack bootcamp at Coding Temple. There, I immersed
                        myself in several technologies including React and Flask and learned languages like
                        Python and Javascript. This equipped me with the skills to create user-tailored web
                        applications. My experience extends to building responsive interfaces, leveraging APIs,
                        and adhering to professional standards for file structure and database management.
                        I'm excited to combine my diverse background with my coding skills to excel in new challenges.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap justify-center md:justify-start'>
                        {skills.map((item, id) => {
                            return (
                                <p key={id} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>{item.skill}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
