'use client';


import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const PlanBtn = ({work} : {work : MainType}) => {

    const {plans, setPlans} = useContext(WorkContext)!

    console.log("contesxt triggered", plans);

    // const handlePlans = ()=> {
    //   console.log("plan triggered", work);
    //   setPlans([...plans, work]);
    // }
    
    return (
        <div>
            <button 
                className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold"
                onClick={()=> {
                    if(!plans.some((plan) => plan.id === work.id)){
                        setPlans([...plans,work]);
                        toast(`${work.name} Added to today's plan`)
                    }
                    else {
                        toast.error(`${work.name} is already added`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        })
                    }
                }}
            >
                Add to today's plan
            </button>
        </div>
    );
};


export default PlanBtn;