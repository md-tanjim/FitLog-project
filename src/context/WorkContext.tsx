'use client';

import React, {
  createContext,
  ReactNode,
  useState,
} from 'react';

import { MainType } from '@/types/mainType';

type WorkContextType = {
  plans: MainType[];
  setPlans: React.Dispatch<React.SetStateAction<MainType[]>>;
  saved: MainType[];
  setSaved: React.Dispatch<React.SetStateAction<MainType[]>>;
};

export const WorkContext =
  createContext<WorkContextType | null>(null);

const WorkProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plans, setPlans] = useState<MainType[]>([]);
  const [saved, setSaved] = useState<MainType[]>([]);

  const sharedData = {
    plans,
    setPlans,
    saved,
    setSaved,
  };

  return (
    <WorkContext.Provider value={sharedData}>
      {children}
    </WorkContext.Provider>
  );
};

export default WorkProvider;