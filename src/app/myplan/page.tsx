"use client";

import PlanCards from '@/components/planNsaved/PlanCards';
import SavedCards from '@/components/planNsaved/SavedCards';
import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const [activeTab, setActiveTab] = useState("plan");



    const [sortby, setSortby] = useState<"duration" | "cal" | "rating">("duration")

    const { plans, saved } = useContext(WorkContext)!

    const sortPlansNsaved = (plansOrSaved: MainType[]) => {
        const sortedResult = [...plansOrSaved];
        if (sortby === "duration") {
            sortedResult.sort((a, b) => b.duration - a.duration);
        }
        else if (sortby === "rating") {
            sortedResult.sort((a, b) => b.rating - a.rating);
        }
        else if (sortby === "cal") {
            sortedResult.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }


        return sortedResult;
    };


    const sortedPlans = sortPlansNsaved(plans)
    const sortedSaved = sortPlansNsaved(saved)




    // console.log(plans.map(plan => plan.duration), "is map working")
    // console.log(sortby, " sorting working")

    console.log(sortedPlans, "its sorte plans")
    console.log(sortedSaved, "its sorte saved")
    return (

        <div className=''>


            <div className='flex flex-col gap-8    container mx-auto p-5 '>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold ml-5 '>MY PLAN</h1>
                    <p className='ml-5'>Cap of five lifts today. Finish them, then load more.</p>
                </div>


                <div className="grid grid-cols-3 rounded-xl border border-[#ffffff1a] bg-[#13161D] p-4">

                    <div className="text-center text-white">
                        <p className="text-sm text-gray-400">Exercises</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#CCFF00]">
                            {
                            (activeTab === "plan")? plans.length : saved.length}
                        </h1>
                    </div>

                    <div className="text-center text-white">
                        <p className="text-sm text-gray-400">Minutes</p>
                        <h1 className="text-3xl md:text-4xl font-bold">


                            {
                            (activeTab === "plan") ? 
                            plans.reduce((acc, plan) => acc + plan.duration, 0)
                            :
                            saved.reduce((acc, plan) => acc + plan.duration, 0)
                            }

                            
                        </h1>
                    </div>

                    <div className="text-center text-white">
                        <p className="text-sm text-gray-400">Calories</p>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            {
                            
                            (activeTab === "plan") ? 
                            plans.reduce((acc, plan) => acc + plan.caloriesBurned, 0)
                            :
                            saved.reduce((acc, plan) => acc + plan.caloriesBurned, 0)
                            
                            }
                        </h1>
                    </div>

                </div>



    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">


        <div className="w-full md:w-auto border border-[#ffffff1a] rounded-2xl bg-[#13161D] p-1 flex">

            <button
                onClick={() => setActiveTab("plan")}
                className={`flex-1 md:flex-none px-4 md:px-6 py-3 rounded-xl transition-all ${activeTab === "plan"
                        ? "bg-[#1F2937] text-white shadow"
                        : "text-gray-400"
                    }`}
            >
                Today's Plan
            </button>

            <button
                onClick={() => setActiveTab("saved")}
                className={`flex-1 md:flex-none px-4 md:px-6 py-3 rounded-xl transition-all ${activeTab === "saved"
                        ? "bg-[#1F2937] text-white shadow"
                        : "text-gray-400"
                    }`}
            >
                Saved
            </button>

        </div>


        <div className="flex items-center gap-3 w-full md:w-auto">

            <p className="text-gray-400 whitespace-nowrap">
                Sort by
            </p>

            <select
                value={sortby}
                onChange={(e) =>
                    setSortby(e.target.value as "duration" | "cal" | "rating")
                }
                className="select bg-[#13161D] text-white border-[#ffffff1a] w-full max-w-[140px]"
            >
                <option value="duration">Duration</option>
                <option value="cal">Calories</option>
                <option value="rating">Rating</option>
            </select>

        </div>

    </div>




            </div>




            {
                (activeTab === "plan") ?
                    (
                        (plans.length > 0) ?
                            sortedPlans.map(plan => <PlanCards key={plan.id} plan={plan}></PlanCards>)
                            :
                            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dotted border-gray-600
            bg-[#15171d] px-6 py-12 text-center shadow-xl mx-auto w-full container">

                                <h3 className="mb-2 text-xl font-black tracking-wider uppercase text-white sm:text-2xl">
                                    NOTHING HERE YET
                                </h3>


                                <p className="mb-6 max-w-md text-sm font-medium text-slate-400">
                                    Browse the library and add a lift to get today moving.
                                </p>


                                <button

                                    className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-black text-black">

                                    <Link href="/">Go to workouts</Link>
                                </button>
                            </div>
                    )
                    :
                    (
                        (saved.length > 0) ?
                            sortedSaved.map(plan => <SavedCards key={plan.id} plan={plan}></SavedCards>)
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