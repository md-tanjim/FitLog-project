
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

const SavedCards = ({plan} : MainType) => {

    const [done, setDone] = useState(false);

    const {saved, setSaved} = useContext(WorkContext);

    console.log(saved, "plan from saved cards")

    
    return (
       <div className="container mx-auto my-5">
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-3xl border border-white/10 bg-[#13161D] p-4">

    <div className="flex items-start gap-4 flex-1">

      <Image
        src={plan.image}
        alt=""
        width={150}
        height={100}
        className="h-24 w-24 md:h-20 md:w-32 rounded-xl object-cover "
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

    <div className="flex items-center gap-2 w-full md:w-auto">

      <button className="flex-1 md:flex-none rounded-full border border-white/15 px-4 py-2 text-sm text-white whitespace-nowrap transition hover:bg-white/5">
        <Link href={`/workdetails/${plan.id}`}>
          View Details
        </Link>
      </button>

      <button
        className="shrink-0 text-gray-400 transition hover:text-white"
        onClick={() => {
          const newStack = saved.filter((s) => s !== plan);
          setSaved(newStack);

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

export default SavedCards;