"use client"

import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home">
      <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-46'>
        <div className='md:w-3/5 md:mt-2'>
          <Image className='rounded-full shadow-2xl' src='/headshot.webp' alt="head shot" width={300} height={300} />
        </div>
        <div className='md:w-3/5 md:mt-2'>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Devin!
          </h1>
          <p className="text-[#242424] dark:text-slate-200 text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-blue-600">
              Software Developer {" "}
            </span>
            based in Bend, OR. I am continually learning and adding new skills to my toolkit.
            To see what I am currently working on, click below!
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-700 hover:cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce hover:cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}

export default Hero