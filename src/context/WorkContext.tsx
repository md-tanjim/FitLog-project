'use client';

import React, { createContext, ReactNode, useState } from 'react';






 export const WorkContext = createContext({});

const WorkProvider = ({children} : {children : ReactNode}) => {

    const [plans, setPlans] = useState([]);
    const [saved, setSaved] = useState([]);


    const sharedData ={
        plans,
        setPlans,
        saved,
        setSaved,
    }
    
    return (
        <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
    );
};

export default WorkProvider;