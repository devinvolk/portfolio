import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  { BsGithub } from 'react-icons/bs'

const work = [
  {
    name: 'Gym IQ',
    description: "A user-tailored React web application for simplifying workouts at the gym",
    image: '/social_fit.png',
    github: 'https://github.com/devinvolk/test_capstone',
  },
  {
    name: 'Pokemon Flask App',
    description: 'Built a Pokemon fan site with full CRUD operation, team selector through an API, and battle feature utilizing Flask, Jinja, Python, ElephantSQL, and PostgreSQL',
    image: '/pokemon.png',
    github: 'https://github.com/devinvolk/flask_hw',
  },
  {
    name: 'SummaryPro',
    description: 'An AI powered article summary tool built in React, Vite, Redux, and Tailwind CSS',
    image: '/summarypro.png',
    github: 'https://github.com/devinvolk/SummaryPro',
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>
      <div className='flex flex-col space-y-28'>
        {work.map((item, id) => {
          return (
            <div key={id} className='flex flex-col md:flex-row md:space-x-12'>
              <div className='mt-8 md:w-1/2'>
                <Link href={item.github} target='_blank'>
                  <Image
                    src={item.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className='mt-12 md:w-1/2'>
                <h1 className='text-4xl font-bold mb-6'>{item.name}</h1>
                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                  {item.description}
                </p>
                <div className='flex flex-row align-bottom space-x-4'>
                  <Link href={item.github} target='_blank'>
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div> 
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects