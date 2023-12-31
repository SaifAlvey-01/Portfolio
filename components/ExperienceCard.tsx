/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial= {{
            y: -200,
            opacity:0,
        }}
        transition= {{
            duration: 1.2
        }}
        whileInView= {{
            opacity: 1,
            y: 0,
        }}
        viewport= {{once: true}}
        className= "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src= {urlFor(experience?.companyImage).url()}
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
            {experience?.technologies.map((tech) => (
                    <img
                    key={tech._id}
                    src={urlFor(tech?.image).url()}
                    alt=""
                    className='h-10 w-10 rounded-full'
                    />
            ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {" "}{experience.isCurrentlyWorkingHere? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            <ul className='list-disc max-h-96 w-4/5 pr-5 space-y-4 ml-5 text-lg h-80 overflow-y-scroll scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
                {experience.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}