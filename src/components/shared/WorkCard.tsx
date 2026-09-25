import { MainType } from '@/types/mainType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { RiFireFill } from 'react-icons/ri';






interface Icard {
    work : MainType;
}

// const WorkCard = ({work} : Icard) => {
const WorkCard = ({work} : Icard) => {

// console.log(work.work.name, work , "workingggg")
    return (

      <Link href={`/workdetails/${work.id}`} >
      
        <div className='container mx-auto max-w-[600px] md: max-w-[400px] '>
       

       <div
      // onClick={() => onClick(work)}
      className="overflow-hidden rounded-3xl border border-gray-600 bg-[#15171d] cursor-pointer transition
       hover:border-lime-100 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-64 ">
        <Image
          src={work.image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

     
      <div className="p-6">
        
        <div className="mb-6 flex flex-wrap gap-3">
          {work.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-lime-400 px-4 py-1 text-sm font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        
        <h3 className="mb-2 text-2xl font-black uppercase text-white">
          {work.name}
        </h3>

       
        <p className="mb-8 text-xl text-zinc-400">
          {work.equipment}
        </p>

        <div className="border-t border-gray-600 pt-5">
          <div className="flex flex-wrap gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
             
              <IoMdTime />
              <span>{work.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
             
              <RiFireFill />
              <span>{work.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              
              <FaRegStar />
              <span>{work.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        
         

    
        </div>
              </Link>
    );
};

export default WorkCard;