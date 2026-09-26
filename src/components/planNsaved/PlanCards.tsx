
import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { RiFireFill } from 'react-icons/ri';
// import { LuClock3 } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

const PlanCards = ({plan} : {plan : MainType}) => {

    const [done, setDone] = useState(false);

    const {plans, setPlans} = useContext(WorkContext)!;

    console.log(plan, "plan from cards")

    
    return (
       <div className="container mx-auto my-5">
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-3xl border border-white/10 bg-[#13161D] p-4">

    {/* Left Side */}
    <div className="flex items-start gap-4 flex-1">

      <Image
        src={plan.image}
        alt={plan.name}
        width={150}
        height={100}
        className="h-24 w-24 md:h-20 md:w-32 rounded-xl object-cover shrink-0"
      />

      <div className="min-w-0">
        <h2 className="text-lg md:text-2xl font-black uppercase text-white">
          {plan.name}
        </h2>

        <p className="text-gray-400">
          {plan.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-300">

          <span className="flex items-center gap-1">
            <IoMdTime />
            {plan.duration} min
          </span>

          <span className="flex items-center gap-1">
            <RiFireFill />
            {plan.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FaRegStar />
            {plan.rating}
          </span>

        </div>
      </div>

    </div>

    {/* Right Side */}
    <div className="flex w-full md:w-auto items-center gap-2">

      <button className="flex-1 md:flex-none rounded-full border border-[#ffffff26] px-4 py-2 text-sm text-white whitespace-nowrap ">
        <Link href={`/workdetails/${plan.id}`}>
          View Details
        </Link>
      </button>

      <button
        onClick={() => {
          setDone(true);

          if (!done) {
            toast.success(`${plan.name} Marked As Done`);
          }
        }}
        className={`flex-1 md:flex-none rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition 
          ${done
            ? "bg-green-700 text-white"
            : "bg-lime-400 text-black"
        }`}
      >
        {done ? "Already Done" : "✓ Mark as Done"}
      </button>

      <button
        className=" text-gray-400 transition hover:text-white"
        onClick={() => {
          const newStack = plans.filter((s) => s !== plan);
          setPlans(newStack);

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