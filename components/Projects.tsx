/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import { motion } from "framer-motion";
import { Project } from 'typings';
import { urlFor } from 'sanity';

type Props = {
    projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <motion.div
    initial= {{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition= {{duration: 1.5}}
    className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-madatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
            {projects?.map((project, i) => (
                    <div
                    key={project?._id}
                    className='w-scr
                    een flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                        initial= {{
                            y: -300,
                            opacity: 0
                        }}
                        transition= {{
                            duration: 1.2
                        }}
                        whileInView= {{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport= {{once: true}}
                        className='w-72 h-56 rounded-lg md:w-[500px] md:h-96 xl:w-[700px] xl:h-[500px]'
                        src= {urlFor(project?.image).url()} alt="" />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>{project?.title}</h4>
                            <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((tech) => (
                                <img
                                key={tech._id}
                                src={urlFor(tech?.image).url()}
                                alt=""
                                className='h-10 w-10'
                                />
                            ))}
                            </div>
                            <p className='text-lg w-[400px] md:w-[700px] xl:w-[900px] text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}