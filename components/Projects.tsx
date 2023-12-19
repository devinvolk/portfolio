import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVite,
  TbBrandRedux,
  TbBrandJavascript,
  TbBrandFirebase,
  TbBrandOauth,
} from "react-icons/tb";
import { SiMui } from "react-icons/si";

const work = [
  {
    name: "Gym IQ",
    description:
      "A user-tailored React web application for simplifying workouts at the gym",
    alt: "Gym IQ main page image",
    image: "/social_fit.png",
    github: "https://github.com/devinvolk/test_capstone",
    deployed: "https://gymiq.netlify.app",
    stack: [
      <TbBrandReact key={"react"} size={30} />,
      <TbBrandFirebase key={"firebase"} size={30} />,
      <TbBrandOauth key={"oauth"} size={30} />,
      <SiMui key={"mui"} size={30} />,
      <TbBrandJavascript key={"javacript"} size={30} />,
    ],
  },
  {
    name: "Threshold Calculator",
    description:
      "Designed to provide a one-stop-shop for multisport training zone calculation",
    alt: "Threshold Caculator landing page image",
    image: "/threshold_calculator.png",
    github: "https://github.com/devinvolk/threshold_calculator",
    deployed: "https://triathlonthresholdcalculator.netlify.app/",
    stack: [
      <TbBrandNextjs key={"next"} size={30} />,
      <TbBrandTailwind key={"tailwind"} size={30} />,
      <TbBrandJavascript key={"javacript"} size={30} />,
    ],
  },
  {
    name: "SummaryPro",
    description: "An AI powered article summary tool built",
    alt: "SummaryPro landing page image",
    image: "/summarypro.png",
    github: "https://github.com/devinvolk/SummaryPro",
    deployed: "https://serene-rabanadas-143b28.netlify.app/",
    stack: [
      <TbBrandReact key={"react"} size={30} />,
      <TbBrandVite key={"vite"} size={30} />,
      <TbBrandRedux key={"redux"} size={30} />,
      <TbBrandTailwind key={"tailwind"} size={30} />,
      <TbBrandJavascript key={"javascript"} size={30} />,
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
          {work.map((item, id) => {
            return (
              <div key={id} className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={item.deployed} target="_blank">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                  <div className="flex flex-row space-x-2 mb-4">
                    <p className="text-lg font-semibold text-neutral-600  dark:text-neutral-400">
                      Stack:
                    </p>
                    <div className="flex flex-row space-x-4">
                      {item.stack.map((icon, index) => (
                        <span key={index} className="text-neutral-600  dark:text-neutral-400">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={item.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={item.deployed} target="_blank">
                      <SiNetlify
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
