import React from 'react';
import WorkCard from './WorkCard';
import { MainType } from '@/types/mainType';





 export const getWorks = async () : Promise<MainType[]> =>{
    try{
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
    }
    catch(error){
        console.error("Error fetching workout data", error);
    }
    return [];
}





const Library = async () => {


    const works = await getWorks();

    // console.log( works, "wrokout dataaaaaaaaaaa" )





    return (
            <div id="library-section" className=' text-white container mx-auto  p-5 mt-16'>
        <div className=''>
            <h1 className='text-5xl font-bold'>THE LIBRARY</h1>
            <p className='mb-8 text-base md:text-lg text-[#9CA3AF] '>Twelve lifts covering every major muscle group.</p>
        </div>

        <div className='grid grid-cols-1  lg:grid-cols-3 gap-5  '>
           {
            works.map((work : MainType)=> {
                console.log(typeof work.id);
                console.log( work.id);
               return <WorkCard key={work.id} work={work}></WorkCard>
            })
           }
        </div>

        </div>
    );
};

export default Library;