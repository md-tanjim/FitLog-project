import React from 'react';
import banimg from '@/assets/banner.png';
import Image from 'next/image';

const Banner = () => {
    return (
       <div className="container mx-auto  ">
  <section className="mx-4 md:mx-6 mt-6 rounded-3xl border border-[#ffffff1a] bg-[#15171d]">
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-14">

      <div className="max-w-xl text-center md:text-left">
        <p className="mb-4 md:mb-6 text-xs font-bold tracking-widest text-lime-400 uppercase">
          Workout Library
        </p>

        <h1 className="mb-4 md:mb-6 text-4xl md:text-6xl font-black text-white">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mb-8 text-base md:text-lg text-[#9CA3AF] ">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today's plan, and watch the week's work add up.
        </p>

        <button className="mx-auto md:mx-0 rounded-lg bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300">
          
          <a href="#library-section">BROWSE WORKOUTS</a>
        </button>
      </div>

      
      <div className="hidden md:block relative h-[320px] w-[320px]">
        <Image
          src={banimg}
          alt="Workout Machine"
          className="object-contain w-full h-full"
        />
      </div>

    </div>
  </section>
</div>
    );
};

export default Banner;