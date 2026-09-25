'use client';


import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const SavedBtn = ({work} : {work : MainType}) => {

    const {saved, setSaved} = useContext(WorkContext)

    console.log("contesxt triggered", saved);

    const handlesaved = ()=> {
      console.log("plan triggered", work);
      setSaved([...saved, work]);
    }
    
    return (
        <div>
            <button 
                className="border border-[#ffffff1a] px-6 py-3 rounded-xl"
                onClick={()=> {
                    if(!saved.includes(work)){
                        setSaved([...saved,work]);
                        toast(`${work.name} is added successfully`)
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
                Save for later
            </button>
        </div>
    );
};


export default SavedBtn;