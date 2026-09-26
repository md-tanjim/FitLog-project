'use client';


import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const SavedBtn = ({work} : {work : MainType}) => {

    const {saved, setSaved} = useContext(WorkContext)

    console.log("contesxt triggered", saved);

    const handlePlans = ()=> {
      console.log("plan triggered", work);
      setSaved([...saved, work]);
    }
    
    return (
        <div>
            <button 
                className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold"
                onClick={()=> {
                    if(!saved.some((plan) => plan.id === work.id)){
                        setSaved([...saved,work]);
                        toast(`${work.name} Added to saved`)
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
                save for later
            </button>
        </div>
    );
};


export default SavedBtn;