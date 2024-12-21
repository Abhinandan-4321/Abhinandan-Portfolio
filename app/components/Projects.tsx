import React from 'react';
import Link from 'next/link';

import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from './ui/direction-aware-hover';
import { CardBody } from './ui/3d-card';

const Projects = () => {
    const projects = [
        {
            title: "Blissful Bites - Random Meal Generator App",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "https://abhinandan-4321.github.io/Blissful-Bites/",
            cover: "/Project 1.png",
            background: "bg-green-500",
        },
        {
            title: "Blogosphere - Fullstack Blogging Application",
            tech: [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiFirebase, SiTailwindcss],
            link: "https://blogosphere-4321.netlify.app/",
            cover: "/Project 2.png",
            background: "bg-indigo-500",
        },
        {
            title: "Catch the Fish - Game",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "https://abhinandan-4321.github.io/Catch-The-Fish/",
            cover: "/Project 3.png",
            background: "bg-indigo-500",
        },
        {
            title: "Rock Paper Scissors - Game",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "https://abhinandan-4321.github.io/rock-paper-scissors/",
            cover: "/Project 4.png",
            background: "bg-green-500",
        },
    ]

  return (
    <div className="py-10 px-5 sm:px-0">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center rotate-[6deg] mb-10">
        <h1 className="text-4xl font-bold text-center">Projects 🎨</h1>
        <div className="w-[80px] h-2 bg-green-500 rounded-full"></div>
        <div className="w-[80px] h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 grid-cols-1">
        {projects.map((project, index) => (
          <CardBody
            key={index} // Key for the mapped element
            className="transform transition-transform hover:scale-105 hover:rotate-1 bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.05] w-full h-auto rounded-xl p-4"
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                className={cn(
                  'p-4 rounded-md cursor-pointer overflow-hidden',
                  project.background
                )}
              >
                {/* Background Image with Hover */}
                <DirectionAwareHover className="relative space-y-5 cursor-pointer w-full h-64 shadow-xl rounded-lg overflow-hidden" imageUrl={project.cover}>
                  <div className='space-y-5 '>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                        {project.tech.map((Icon, index)=>{
                            return <Icon className='w-8 h-8' key={index}/>
                        })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          </CardBody>
        ))}
      </div>
    </div>
  );
};

export default Projects;
