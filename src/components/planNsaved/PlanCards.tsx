
import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
// import { LuClock3 } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

const PlanCards = ({plan} : MainType) => {

    const [done, setDone] = useState(false);

    const {plans, setPlans} = useContext(WorkContext);

    console.log(plan, "plan from cards")

    
    return (
        <div className='container mx-auto my-5'>
         <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#13161D] p-4">
      
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <Image
          src={plan.image}
          alt=""
          width={150}
          height={80}
          className="h-20 w-32 rounded-xl object-cover"
        />

        <div>
          <h2 className="text-2xl font-black uppercase text-white">
            {plan.name}
          </h2>

          <p className="text-gray-400">
            {plan.equipment}
          </p>

          <div className="mt-2 flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              {/* <LuClock3 size={16} className="text-lime-400" /> */}
              {plan.duration} min
            </span>

            <span className="flex items-center gap-1">
              
              {plan.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
             
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-4">
        <button className="rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/5">
          
          <Link href={`/workdetails/${plan.id}`}>View Details</Link>
        </button>

        <button
          onClick={() => setDone(true)}
          className={`rounded-full px-6 py-3 font-semibold transition 
            ${done? "bg-green-700 text-white"
              : "bg-lime-400 text-black"
          }`}
        >
          {done ? "Already Done" : "✓ Mark as Done"}
        </button>

        <button className="text-gray-400 transition hover:text-white"
        onClick={() => {
                        const newStack = plans.filter((s) => s != plan);
                        setPlans(newStack)
                        
                        toast.success(`${plan.name} is removed`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});





                    }}
        >
          <RxCross2 size={24} />
        </button>
      </div>
    </div>
        </div>
    );
};

export default PlanCards;