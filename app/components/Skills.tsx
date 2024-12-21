"use client"
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { SiCplusplus, SiExpress, SiFigma, SiFirebase, SiGit, SiJavascript, SiLangchain, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

const Skills = () => {

    const skills = [
        {
            text: "React",
            Icon: SiReact,
            link: "https://reactjs.org/",
        },
        {
            text: "Mongo DB",
            Icon: SiMongodb,
            link: "https://www.mongodb.com/",
        },
        {
            text: "Express JS",
            Icon: SiExpress,
            link: "https://expressjs.com/",
        },
        {
            text: "Node JS",
            Icon: SiNodedotjs,
            link: "https://nodejs.org/en/",
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
        },
        {
            text: "MySQL",
            Icon: SiMysql,
            link: "https://dev.mysql.com/",
        },
        {
            text: "C++",
            Icon: SiCplusplus,
            link: "https://learn.microsoft.com/en-us/cpp/?view=msvc-170",
        },
        {
            text: "Firebase",
            Icon: SiFirebase,
            link: "https://firebase.google.com/",
        },
        {
            text: "Git",
            Icon: SiGit,
            link: "https://git-scm.com/",
        },
        {
            text: "Tailwind CSS",
            Icon: SiTailwindcss,
            link: "https://tailwindcss.com/",
        },
        {
            text: "Figma",
            Icon: SiFigma,
            link: "https://www.figma.com/",
        },
        {
            text: "Langchain JS",
            Icon: SiLangchain, // Assuming this is a valid icon
            link: "https://langchain.com/docs/",
        },
    ];    

  return (
    <div className='max-w-5xl px-8 mx-auto'>
      <div className='flex flex-col justify-center items-center -rotate-[6deg]'>
        <h1 className='text-3xl font-bold'>Skills 🔪</h1>
        <div className='w-[10vw] h-2 bg-green-500 rounded-full'></div>
        <div className='w-[10vw] h-2 bg-indigo-500 rounded-full translate-x-2'></div>
      </div>

      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
