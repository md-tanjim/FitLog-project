"use client";

import PlanCards from '@/components/planNsaved/PlanCards';
import SavedCards from '@/components/planNsaved/SavedCards';
import { WorkContext } from '@/context/WorkContext';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const [activeTab, setActiveTab] = useState("plan");

    const { plans, saved } = useContext(WorkContext)


    return (

        <div className=''>


            <div className='flex flex-col gap-8    container mx-auto p-5 '>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold ml-5 '>MY PLAN</h1>
                    <p className='ml-5'>Cap of five lifts today. Finish them, then load more.</p>
                </div>


                <div className='flex  justify-between items-center  rounded-xl  border border-[#ffffff1a] h-30 bg-[#13161D] '>
                    <div className='ml-5 text-white'>
                        <p>Exercises</p>
                        <h1 className='text-4xl font-bold text-[#CCFF00]'>2</h1>
                    </div>
                    <div className='text-white'>
                        <p>Minutes</p>
                        <h1 className='text-4xl font-bold'>23</h1>
                    </div>
                    <div className='mr-40 text-white'>
                        <p>Calories</p>
                        <h1 className='text-4xl font-bold'>2</h1>
                    </div>

                </div>


                <div className="   bg-transparent p-1 flex justify-between items-center">
                    <div className='max-w-100 border rounded-2xl bg-[#13161D] '>
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`px-6 py-3 rounded-xl transition-all 
        ${activeTab === "plan" ? "bg-[#1F2937] text-white shadow" : "text-gray-400"}`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`px-6 py-3 rounded-xl transition-all 
        ${activeTab === "saved" ? "bg-[#1F2937] text-white shadow" : "text-gray-400"}`}>

                            Saved
                        </button>
                    </div>

                    <div className=' flex gap-4 items-center  w-[250px]'>
                        <p className='text-gray-400  '>sort by</p>
                        <select defaultValue="Medium" className="select select-md max-w-[98px]  bg-[#13161D] text-white ">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>




                </div>






            </div>


        {/* {

            (plans.length>0) ? 
            <div>hello</div>
            :
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dotted border-gray-600
            bg-[#15171d] px-6 py-12 text-center shadow-xl mx-auto w-full container">

                <h3 className="mb-2 text-xl font-black tracking-wider uppercase text-white sm:text-2xl">
                    Nothing here yet
                </h3>


                <p className="mb-6 max-w-md text-sm font-medium text-slate-400">
                    Browse the library and add a lift to get today moving.
                </p>


                <button className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-black text-black">
                    Go to workouts
                </button>
            </div>
            
        } */}


        {
            (activeTab === "plan")?
            (
                 (plans.length>0) ? 
            <PlanCards></PlanCards>
            :
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dotted border-gray-600
            bg-[#15171d] px-6 py-12 text-center shadow-xl mx-auto w-full container">

                <h3 className="mb-2 text-xl font-black tracking-wider uppercase text-white sm:text-2xl">
                    no plans yet
                </h3>


                <p className="mb-6 max-w-md text-sm font-medium text-slate-400">
                    Browse the library and add a lift to get today moving.
                </p>


                <button className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-black text-black">
                    Go to workouts
                </button>
            </div>
            )
            :
           (
                 (saved.length>0) ? 
            <SavedCards></SavedCards>
            :
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dotted border-gray-600
            bg-[#15171d] px-6 py-12 text-center shadow-xl mx-auto w-full container">

                <h3 className="mb-2 text-xl font-black tracking-wider uppercase text-white sm:text-2xl">
                    Nothing saved yet
                </h3>


                <p className="mb-6 max-w-md text-sm font-medium text-slate-400">
                    Browse the library and add a lift to get today moving.
                </p>


                <button className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-black text-black">
                    Go to workouts
                </button>
            </div>
            )
        }





        </div>
    );
};

export default MyPlanPage;