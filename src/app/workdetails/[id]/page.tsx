

import PlanBtn from '@/components/planNsaved/PlanBtn';
import SavedBtn from '@/components/planNsaved/SavedBtn';
// import { getWorks } from '@/components/shared/Library';
// import { MainType } from '@/types/mainType';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


// interface IWorkIdPage{
//     params : Promise<{id : number}>
// }




// const getWorks = async () : Promise<MainType[]> =>{
//     try{
//         const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
//     const data = await res.json();
//     return data;
//     }
//     catch(error){
//         console.error("Error fetching workout data", error);
//     }
//     return [];
// }



const WorkIdPage = async ({ params }: { params: Promise<{ id: number }> }) => {

  // const allWorkouts = await getWorks();

  // const {id} = await params;

  // const work = allWorkouts.find(work => work.id == id)



    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
      notFound();
    }
    const work = await res.json();

    if (!work) {
      notFound();
    }



  console.log(work, "this is workouts");







  return (
    <div className='text-white'>
      {/* inside id
          {work.name} */}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">


          <div className="lg:w-1/2">
            <Image
              src={work.image}
              alt={work.name}
              width={800}
              height={1000}
              className="w-full rounded-3xl "
            />
          </div>


          <div className="lg:w-1/2 text-white">

            <h1 className="text-4xl font-black mb-4">
              {work.name}
            </h1>

            <p className="text-gray-400 mb-4">
              {work.description}
            </p>


            <div className="flex flex-wrap gap-2 mb-5">
              {work.muscleGroups.map((group : string) => (
                <span
                  key={group}
                  className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold"
                >
                  {group}
                </span>
              ))}
            </div>


            <div className="bg-[#15171d] border border-[#ffffff1a] rounded-3xl overflow-hidden mb-8">

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Equipment</span>
                <span>{work.equipment}</span>
              </div>

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Difficulty</span>
                <span>{work.difficulty}</span>
              </div>

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Sets</span>
                <span>{work.sets}</span>
              </div>

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Reps</span>
                <span>{work.reps}</span>
              </div>

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Duration</span>
                <span>{work.duration} min</span>
              </div>

              <div className="flex justify-between p-3 border-b border-[#ffffff1a]">
                <span>Calories</span>
                <span>{work.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between p-3">
                <span>Rating</span>
                <span>{work.rating}</span>
              </div>

            </div>


            <h2 className="text-2xl font-bold mb-1">
              Instructions
            </h2>

            <ol className="space-y-2 text-gray-400 mb-8">
              {
                work.instructions.map((instruction :  string, index : string) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                ))
              }
            </ol>


            <div className="flex flex-col sm:flex-row gap-4">
              <PlanBtn work={work}></PlanBtn>

              <SavedBtn work={work}></SavedBtn>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
export default WorkIdPage;